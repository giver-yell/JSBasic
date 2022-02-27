/*
 * class
*/
'use strict'

{
    class Post { // 親クラス
        constructor(text) {
            this.text      = text;
            this.likeCount = 0;
        }

        show() {
            console.log(`${this.text} - ${this.likeCount}いいね`);
        }

        like() {
            this.likeCount++;
            this.show();
        }

        // 静的メソッド
        // thisは使えない
        static showInfo() {
            console.log('Post class version1.0');
        }
    }


    // 継承
    class SponsoredPost extends Post { // 子クラス
        constructor(text, sponsor) {
            // 親クラスのinstance呼びだし
            super(text);

            this.sponsor   = sponsor;
        }

        show() {
            super.show();
            console.log(`...sponsored by ${this.sponsor}`);
        }
    }



    const posts = [
        new Post('JavaScript勉強中'),
        new Post('プログラミング楽しい'),
        new SponsoredPost('3分動画でマスターしよう', 'movie'),
    ];

    posts[2].show();
    posts[2].like();

    posts[0].like();
    // posts[0].show();

    Post.showInfo();
}
