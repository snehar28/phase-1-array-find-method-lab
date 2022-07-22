// code your solution here

function superbowlWin(MyArray) {
    if (MyArray.find(data => data.result === "W")) {
        let obj = MyArray.find(data => data.result === "W").year
        return obj
    } else {
        return undefined;
    }
}
