/**
 * Kieu du lieu
 */
let messages;
let total = 100;
let isProduction = true;
let prices = [120, 88, 60];
let languages = ['vi', 'en-us'];
let now = new Date();
let unknown;
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
;
unknown = Direction.UP;
unknown = 'changed';
function log(msg) {
    console.log(msg);
}
// Type '{}' is missing the following properties from type 'IPost': id, title
// const post: IPost = {
// };
// messages = 50; // Type 'number' is not assignable to type 'string'.
function getPost(postId) {
    return {
        id: postId,
        title: 'Post Title',
        body: 'Post Body',
        extra: 'data'
    };
}
