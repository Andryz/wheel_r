"use strict";

var wheel = document.querySelector('#wheel');
var firstSpin = document.querySelector('#spin');
var prize = document.querySelector('#prize');
var btnTry = document.querySelector('#try');
var giftInfo = document.querySelector('#gift-info');
var spinActive = false;

var rotation = function rotation(rotate) {
  if (rotate === 1) {
    wheel.classList.add('first-spin');
    spinActive = true;
    setTimeout(function () {
      spinActive = false;
      prize.classList.add('try');
    }, 3100);
  } else if (rotate === 2) {
    wheel.classList.remove('first-spin');
    wheel.classList.add('second-spin');
    spinActive = true;
    setTimeout(function () {
      spinActive = false;
      prize.classList.add('gift');
    }, 3100);
    setTimeout(function () {
      giftInfo.classList.add('show');
    }, 4100);
  }
};

firstSpin.addEventListener('click', function () {
  if (!spinActive) rotation(1);
});
btnTry.addEventListener('click', function () {
  prize.classList.remove('try');
  rotation(2);
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsid2hlZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdFNwaW4iLCJwcml6ZSIsImJ0blRyeSIsImdpZnRJbmZvIiwic3BpbkFjdGl2ZSIsInJvdGF0aW9uIiwicm90YXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWxCO0FBQ0EsSUFBTUUsS0FBSyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLElBQU1HLE1BQU0sR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWY7QUFDQSxJQUFNSSxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUdBLElBQUlLLFVBQVUsR0FBRyxLQUFqQjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDekIsTUFBSUEsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDZFQsSUFBQUEsS0FBSyxDQUFDVSxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixZQUFwQjtBQUNBSixJQUFBQSxVQUFVLEdBQUcsSUFBYjtBQUNBSyxJQUFBQSxVQUFVLENBQUMsWUFBSTtBQUNYTCxNQUFBQSxVQUFVLEdBQUcsS0FBYjtBQUNBSCxNQUFBQSxLQUFLLENBQUNNLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLEtBQXBCO0FBQ0gsS0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlILEdBUEQsTUFPTyxJQUFJRixNQUFNLEtBQUssQ0FBZixFQUFpQjtBQUNwQlQsSUFBQUEsS0FBSyxDQUFDVSxTQUFOLENBQWdCRyxNQUFoQixDQUF1QixZQUF2QjtBQUNBYixJQUFBQSxLQUFLLENBQUNVLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLGFBQXBCO0FBQ0FKLElBQUFBLFVBQVUsR0FBRyxJQUFiO0FBQ0FLLElBQUFBLFVBQVUsQ0FBQyxZQUFJO0FBQ1hMLE1BQUFBLFVBQVUsR0FBRyxLQUFiO0FBQ0FILE1BQUFBLEtBQUssQ0FBQ00sU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsTUFBcEI7QUFFSCxLQUpTLEVBSVAsSUFKTyxDQUFWO0FBS0FDLElBQUFBLFVBQVUsQ0FBQyxZQUFJO0FBQ1hOLE1BQUFBLFFBQVEsQ0FBQ0ksU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsTUFBdkI7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7QUFFSixDQXRCRDs7QUF3QkFSLFNBQVMsQ0FBQ1csZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtBQUN0QyxNQUFJLENBQUNQLFVBQUwsRUFBaUJDLFFBQVEsQ0FBQyxDQUFELENBQVI7QUFFcEIsQ0FIRDtBQUtBSCxNQUFNLENBQUNTLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQUk7QUFDakNWLEVBQUFBLEtBQUssQ0FBQ00sU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUIsS0FBdkI7QUFDQUwsRUFBQUEsUUFBUSxDQUFDLENBQUQsQ0FBUjtBQUNILENBSEQ7QUN0Q0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdoZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3doZWVsJyk7XG5jb25zdCBmaXJzdFNwaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BpbicpO1xuY29uc3QgcHJpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpemUnKTtcbmNvbnN0IGJ0blRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cnknKTtcbmNvbnN0IGdpZnRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpZnQtaW5mbycpO1xuXG5cbmxldCBzcGluQWN0aXZlID0gZmFsc2U7XG5cbmNvbnN0IHJvdGF0aW9uID0gKHJvdGF0ZSkgPT4ge1xuICAgIGlmIChyb3RhdGUgPT09IDEpIHtcbiAgICAgICAgd2hlZWwuY2xhc3NMaXN0LmFkZCgnZmlyc3Qtc3BpbicpO1xuICAgICAgICBzcGluQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgc3BpbkFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcHJpemUuY2xhc3NMaXN0LmFkZCgndHJ5Jyk7XG4gICAgICAgIH0sIDMxMDApXG4gICAgfSBlbHNlIGlmIChyb3RhdGUgPT09IDIpe1xuICAgICAgICB3aGVlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXJzdC1zcGluJyk7XG4gICAgICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1zcGluJyk7XG4gICAgICAgIHNwaW5BY3RpdmUgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBzcGluQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBwcml6ZS5jbGFzc0xpc3QuYWRkKCdnaWZ0Jyk7XG5cbiAgICAgICAgfSwgMzEwMClcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgZ2lmdEluZm8uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICB9LCA0MTAwKVxuICAgIH1cblxufVxuXG5maXJzdFNwaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFzcGluQWN0aXZlKSByb3RhdGlvbigxKVxuXG59KTtcblxuYnRuVHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBwcml6ZS5jbGFzc0xpc3QucmVtb3ZlKCd0cnknKTtcbiAgICByb3RhdGlvbigyKVxufSk7XG4iLCIiXX0=