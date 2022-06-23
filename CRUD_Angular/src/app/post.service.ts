import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ReplaySubject } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore:AngularFirestore) { }

  getPost(){
    return this.angularFirestore.collection("post").snapshotChanges();
  }

  getPostById(id:any){
    return this.angularFirestore.collection("post").doc(id).valueChanges();
  }

  createPost(post: Post){
    return new Promise<any> (( resolve, reject ) => {
      this.angularFirestore.collection("post").add(post).then(
        (response) => {
          console.log(response)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  updatePost(post: Post, id:any){
    return this.angularFirestore.collection("post").doc(id).update({
      title: post.title,
      content: post.content,
      author: post.author
    });
  }

  deletePost(post: Post){
    return this.angularFirestore.collection("post").doc(post.id).delete();
  }

}
