export default function TwitterIcon({ fill, width, height, className }: any) {
    return (
      <svg
        width={width ? width : 35}
        height={height ? height : 35}
        viewBox="0 0 38 30"
        fill="none"
        className={className ? className : ""}
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M37.4167 3.55127C36.405 5.0585 35.1249 6.40055 33.6383 7.47419C33.659 7.7839 33.659 8.11425 33.659 8.4446C33.659 18.4584 26.0403 30 12.1242 30C7.85031 30 3.86545 28.7405 0.5 26.5933C1.09876 26.6552 1.69752 26.6965 2.31693 26.6965C5.8682 26.6965 9.13042 25.4783 11.7113 23.4549C10.1325 23.4223 8.60334 22.8973 7.33739 21.9534C6.07143 21.0095 5.13191 19.6938 4.65003 18.19C5.10427 18.2725 5.57915 18.3345 6.07467 18.3345C6.75602 18.3345 7.43737 18.2312 8.05678 18.0661C6.34432 17.7145 4.80547 16.7833 3.69969 15.4292C2.59392 14.0752 1.98887 12.3813 1.98658 10.6332V10.5506C3.01893 11.1081 4.17515 11.4591 5.41397 11.5003C4.37709 10.8048 3.52758 9.86449 2.94059 8.76253C2.35359 7.66057 2.04721 6.43093 2.04852 5.18238C2.04852 3.79904 2.42017 2.49828 3.08087 1.38334C6.81796 5.96697 12.3926 8.98142 18.69 9.29112C18.5661 8.73365 18.4835 8.15554 18.4835 7.55678C18.489 5.5507 19.2897 3.62865 20.7101 2.21207C22.1306 0.795491 24.0548 -7.44707e-06 26.0609 0C28.2495 0 30.2109 0.908465 31.5943 2.39504C33.308 2.04405 34.9391 1.42464 36.405 0.557467C35.8269 2.31246 34.6294 3.79904 33.0602 4.72815C34.5646 4.56372 36.0342 4.1667 37.4167 3.55127Z"
          fill={fill ? fill : "#5F6FEE"}
        />
      </svg>
    );
  }
  