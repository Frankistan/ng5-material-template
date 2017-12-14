import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-one',
    templateUrl: './one.component.html',
    styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
    url: string = "https://jsonplaceholder.typicode.com/posts";
    fecha: string = new Date().toDateString();
    posts: Array<{}> = [];
    posts$: Observable<any>;

    constructor(
        private _http: HttpClient,
    ) { }

    ngOnInit() {
        this.posts$ = this._http.get(this.url);

        // for (let index = 1; index < 11; index++) {
        //     let post = {
        //         id: index,
        //         title: "Vivamus tincidunt tortor et risus aliquet varius.",
        //         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus, neque eget fringilla molestie, lacus massa cursus metus, nec laoreet nisl felis vitae velit. Donec id aliquet metus. Curabitur nec tellus euismod, auctor nibh posuere, rutrum enim. Maecenas euismod, ipsum non tincidunt aliquam, velit orci hendrerit lectus, et malesuada nibh justo sed felis. Phasellus consectetur placerat auctor. In facilisis elementum risus, vitae dignissim urna sagittis vel. Suspendisse tristique lacinia massa, sit amet interdum orci pulvinar luctus. Etiam a justo at erat porttitor laoreet eu eget quam. Phasellus suscipit neque sit amet tincidunt convallis. Mauris scelerisque sit amet ipsum in aliquet. Morbi vel iaculis massa. Nunc at condimentum nulla, a pretium purus.",
        //         createdAt: new Date(),
        //         user: "Test User"
        //     };
        //     this.posts.push(post);
        // }
    }

}
