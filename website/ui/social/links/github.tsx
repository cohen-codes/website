import React from "react";

type GithubProps = {} & React.SVGAttributes<SVGElement>;

export const Github = ({ children, ...rest }: GithubProps) => {
  return (
    <svg
      {...rest}
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.38301 16.653C3.08301 16.453 2.82501 16.198 2.52301 15.837C2.36625 15.6451 2.21092 15.4521 2.05701 15.258C1.59401 14.683 1.30201 14.418 1.00001 14.309C0.750309 14.2193 0.546445 14.0342 0.433267 13.7942C0.320089 13.5543 0.306867 13.2792 0.396511 13.0295C0.486154 12.7798 0.671319 12.5759 0.911272 12.4627C1.15122 12.3496 1.42631 12.3363 1.67601 12.426C2.42801 12.696 2.93701 13.161 3.62301 14.014C3.52901 13.897 3.96301 14.441 4.05601 14.553C4.24601 14.78 4.38601 14.918 4.49601 14.991C4.70001 15.128 5.08301 15.187 5.64601 15.131C5.66901 14.749 5.74001 14.378 5.84801 14.036C2.88001 13.31 1.20001 11.396 1.20001 7.63999C1.20001 6.39999 1.57001 5.28399 2.25801 4.34799C2.04001 3.45399 2.07301 2.37299 2.56001 1.15599C2.61528 1.01833 2.70048 0.894683 2.80945 0.794021C2.91841 0.693359 3.04841 0.6182 3.19001 0.573993C3.27101 0.549993 3.31701 0.538993 3.39801 0.526993C4.20101 0.403993 5.33501 0.696993 6.81301 1.62299C7.69381 1.41708 8.59546 1.31372 9.50001 1.31499C10.412 1.31499 11.318 1.41899 12.184 1.62299C13.661 0.689992 14.797 0.396993 15.606 0.526993C15.691 0.539993 15.763 0.556993 15.824 0.576993C15.9628 0.622769 16.0899 0.698426 16.1964 0.798635C16.3028 0.898844 16.386 1.02117 16.44 1.15699C16.927 2.37299 16.96 3.45399 16.742 4.34699C17.433 5.28299 17.8 6.39199 17.8 7.63999C17.8 11.397 16.126 13.305 13.158 14.032C13.283 14.447 13.348 14.911 13.348 15.412C13.3481 16.3173 13.3441 17.2227 13.336 18.128C13.5606 18.177 13.7614 18.3018 13.9047 18.4816C14.048 18.6613 14.1251 18.8849 14.1228 19.1147C14.1206 19.3446 14.0393 19.5666 13.8925 19.7435C13.7457 19.9204 13.5425 20.0414 13.317 20.086C12.178 20.314 11.334 19.554 11.334 18.561L11.336 18.115L11.341 17.41C11.346 16.702 11.348 16.072 11.348 15.412C11.348 14.715 11.165 14.26 10.923 14.052C10.262 13.482 10.597 12.397 11.463 12.3C14.43 11.967 15.8 10.818 15.8 7.63999C15.8 6.68499 15.488 5.89599 14.887 5.23599C14.7604 5.09724 14.6754 4.92562 14.6418 4.7408C14.6082 4.55599 14.6273 4.36544 14.697 4.19099C14.863 3.77699 14.934 3.23399 14.793 2.57699L14.783 2.57999C14.292 2.71899 13.673 3.01999 12.925 3.52899C12.8044 3.61085 12.6673 3.66534 12.5234 3.68866C12.3796 3.71198 12.2323 3.70356 12.092 3.66399C11.2479 3.43028 10.3759 3.31286 9.50001 3.31499C8.61001 3.31499 7.72801 3.43399 6.90801 3.66499C6.76823 3.70425 6.62158 3.7126 6.47824 3.68946C6.33491 3.66632 6.19834 3.61224 6.07801 3.53099C5.32601 3.02399 4.70401 2.72399 4.21001 2.58399C4.06601 3.23699 4.13701 3.77799 4.30201 4.19099C4.37182 4.36535 4.39111 4.55584 4.35769 4.74065C4.32426 4.92547 4.23947 5.09713 4.11301 5.23599C3.51601 5.88999 3.20001 6.69399 3.20001 7.63999C3.20001 10.812 4.57101 11.968 7.52201 12.3C8.38701 12.397 8.72301 13.477 8.06601 14.048C7.87401 14.216 7.63701 14.78 7.63701 15.412V18.562C7.63701 19.548 6.80201 20.287 5.67701 20.09C5.44878 20.0499 5.24154 19.9318 5.09073 19.7559C4.93991 19.58 4.85488 19.3571 4.85015 19.1254C4.84543 18.8938 4.92131 18.6676 5.06483 18.4857C5.20835 18.3038 5.4106 18.1773 5.63701 18.128V17.138C4.72701 17.199 3.97501 17.05 3.38301 16.653Z"
        fill="#BABEC9"
      />
      <path
        d="M3.38301 16.653C3.08301 16.453 2.82501 16.198 2.52301 15.837C2.36625 15.6451 2.21092 15.4521 2.05701 15.258C1.59401 14.683 1.30201 14.418 1.00001 14.309C0.750309 14.2193 0.546445 14.0342 0.433267 13.7942C0.320089 13.5543 0.306867 13.2792 0.396511 13.0295C0.486154 12.7798 0.671319 12.5759 0.911272 12.4627C1.15122 12.3496 1.42631 12.3363 1.67601 12.426C2.42801 12.696 2.93701 13.161 3.62301 14.014C3.52901 13.897 3.96301 14.441 4.05601 14.553C4.24601 14.78 4.38601 14.918 4.49601 14.991C4.70001 15.128 5.08301 15.187 5.64601 15.131C5.66901 14.749 5.74001 14.378 5.84801 14.036C2.88001 13.31 1.20001 11.396 1.20001 7.63999C1.20001 6.39999 1.57001 5.28399 2.25801 4.34799C2.04001 3.45399 2.07301 2.37299 2.56001 1.15599C2.61528 1.01833 2.70048 0.894683 2.80945 0.794021C2.91841 0.693359 3.04841 0.6182 3.19001 0.573993C3.27101 0.549993 3.31701 0.538993 3.39801 0.526993C4.20101 0.403993 5.33501 0.696993 6.81301 1.62299C7.69381 1.41708 8.59546 1.31372 9.50001 1.31499C10.412 1.31499 11.318 1.41899 12.184 1.62299C13.661 0.689992 14.797 0.396993 15.606 0.526993C15.691 0.539993 15.763 0.556993 15.824 0.576993C15.9628 0.622769 16.0899 0.698426 16.1964 0.798635C16.3028 0.898844 16.386 1.02117 16.44 1.15699C16.927 2.37299 16.96 3.45399 16.742 4.34699C17.433 5.28299 17.8 6.39199 17.8 7.63999C17.8 11.397 16.126 13.305 13.158 14.032C13.283 14.447 13.348 14.911 13.348 15.412C13.3481 16.3173 13.3441 17.2227 13.336 18.128C13.5606 18.177 13.7614 18.3018 13.9047 18.4816C14.048 18.6613 14.1251 18.8849 14.1228 19.1147C14.1206 19.3446 14.0393 19.5666 13.8925 19.7435C13.7457 19.9204 13.5425 20.0414 13.317 20.086C12.178 20.314 11.334 19.554 11.334 18.561L11.336 18.115L11.341 17.41C11.346 16.702 11.348 16.072 11.348 15.412C11.348 14.715 11.165 14.26 10.923 14.052C10.262 13.482 10.597 12.397 11.463 12.3C14.43 11.967 15.8 10.818 15.8 7.63999C15.8 6.68499 15.488 5.89599 14.887 5.23599C14.7604 5.09724 14.6754 4.92562 14.6418 4.7408C14.6082 4.55599 14.6273 4.36544 14.697 4.19099C14.863 3.77699 14.934 3.23399 14.793 2.57699L14.783 2.57999C14.292 2.71899 13.673 3.01999 12.925 3.52899C12.8044 3.61085 12.6673 3.66534 12.5234 3.68866C12.3796 3.71198 12.2323 3.70356 12.092 3.66399C11.2479 3.43028 10.3759 3.31286 9.50001 3.31499C8.61001 3.31499 7.72801 3.43399 6.90801 3.66499C6.76823 3.70425 6.62158 3.7126 6.47824 3.68946C6.33491 3.66632 6.19834 3.61224 6.07801 3.53099C5.32601 3.02399 4.70401 2.72399 4.21001 2.58399C4.06601 3.23699 4.13701 3.77799 4.30201 4.19099C4.37182 4.36535 4.39111 4.55584 4.35769 4.74065C4.32426 4.92547 4.23947 5.09713 4.11301 5.23599C3.51601 5.88999 3.20001 6.69399 3.20001 7.63999C3.20001 10.812 4.57101 11.968 7.52201 12.3C8.38701 12.397 8.72301 13.477 8.06601 14.048C7.87401 14.216 7.63701 14.78 7.63701 15.412V18.562C7.63701 19.548 6.80201 20.287 5.67701 20.09C5.44878 20.0499 5.24154 19.9318 5.09073 19.7559C4.93991 19.58 4.85488 19.3571 4.85015 19.1254C4.84543 18.8938 4.92131 18.6676 5.06483 18.4857C5.20835 18.3038 5.4106 18.1773 5.63701 18.128V17.138C4.72701 17.199 3.97501 17.05 3.38301 16.653Z"
        fill="black"
        fill-opacity="0.2"
      />
    </svg>
  );
};
