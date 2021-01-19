/**
 * Kieu du lieu
 */
let messages: string;
let total: number = 100;
let isProduction = true;
let prices: Array<number> = [120, 88, 60];
let languages: string[] = ['vi', 'en-us'];
let now = new Date();
let unknown: any;

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
};
unknown = Direction.UP;
unknown = 'changed';

function log(msg: string): void {
    console.log(msg);
}

interface IPost {
    id: string;
    title: string;
    body?: string; // Optional
}

// Type '{}' is missing the following properties from type 'IPost': id, title
// const post: IPost = {

// };

// messages = 50; // Type 'number' is not assignable to type 'string'.

function getPost(postId: string): IPost {
    return {
        id: postId,
        title: 'Post Title',
        body: 'Post Body',
        extra: 'data'
    } as IPost;
}