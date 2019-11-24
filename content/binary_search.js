class BinarySearch {
  constructor(searchSet) {
    this.searchSet = searchSet;
    this.run = this.run.bind(this);
  }

  run(target, arr = this.searchSet) {
    const arrCopy = [...arr];
    let left;
    let right;

    if (arrCopy.length === 0) {
      return false;
    }

    if (arrCopy.length === 1) {
      left = [];
      right = [arrCopy[0]];
    } else {
      const boundary = arrCopy.length % 2 === 0 ? arrCopy.length / 2 : (arrCopy.length - 1) / 2;

      left = arrCopy.slice(0, boundary);
      right = arrCopy.slice(boundary);
    }

    if (target === right[0]) {
      return true;
    } else if (right.length === 0) {
      return false;
    } else if (target > right[0]) {
      return this.run(target, right.slice(1));
    }

    return this.run(target, left);
  }
}
