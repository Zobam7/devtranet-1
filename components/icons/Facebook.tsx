export default function FacebookIcon({ fill, width, height, className }: any) {
  return (
    <svg width={width ? width : 30}
    height={height ? height : 30}
    viewBox="0 0 30 30"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_4170_3154"  maskUnits="userSpaceOnUse" x="6" y="1" width="19" height="28">
    <path d="M23 7.875H19.2419C18.5631 7.875 18.0125 8.425 18.0125 9.10438V13.4169H23L22.2694 18.165H18.0131V26.875H12.5281V18.165H8V13.4169H12.4694L12.5281 8.91062L12.52 8.09187C12.5135 7.44201 12.6358 6.7973 12.88 6.19501C13.1242 5.59272 13.4853 5.0448 13.9425 4.58294C14.3997 4.12107 14.944 3.75442 15.5437 3.50417C16.1435 3.25392 16.787 3.12505 17.4369 3.125H23V7.875Z" fill="white" stroke="white" stroke-width="3.8" stroke-linejoin="round"/>
    </mask>
    <g mask="url(#mask0_4170_3154)">
    <path d="M0.5 0H30.5V30H0.5V0Z" fill={fill ? fill : "#5F6FEE"}/>
    </g>
    </svg>
    
  );
}