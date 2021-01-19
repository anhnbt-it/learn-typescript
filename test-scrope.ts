function main() {
    console.log("START");
    if (true) {
        
        /**
         * var
         * Function scope.
         * Có thể khai báo lại biến trong
         * cùng 1 scope với từ khóa var.
         * var thì hoisted lên đầu scope.
         */
        var lang = "vi";
        /**
         * let/const
         * Block scope
         * Không thể khai báo lại biến trong
         * cùng 1 scope với let hoặc const.
         * Khi khai báo biến với let hoặc
         * const thì biến đó không được
         * hoisted lên đầu scope, dẫn đến
         * muốn dùng biến thì bắt buộc
         * phải được khai báo trước.
         */
        let target = "en-us";
        
        console.log("inside block");
        console.log(target);
    }

    console.log(lang); // OK
    // console.log(target); // Cannot find name 'target'.
}

function redeclareVariable() {
    var x = 5;
    console.log(x);
    
    var x = 10; // OK
    console.log(x);

    let y = 55;
    console.log(y);

    // let y = 100;
    // Cannot redeclare block-scoped variable 'y'.
    // console.log(y);

}

function testHoisting() {
    console.log(x); // OK: x is undefined
    var x = 5;

    // console.log(y);
    // Block-scoped variable 'y' used 
    // before its declaration.

    // let y = 10;
}