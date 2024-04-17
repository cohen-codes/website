import React from 'react';

type GlobeProps = {} & React.SVGAttributes<SVGElement>;

export const Globe = ({ children, ...rest }: GlobeProps) => {
  return (
    <svg
      {...rest}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.91 6.64C19.91 6.64 19.91 6.64 19.91 6.59C19.2054 4.66623 17.9269 3.00529 16.2475 1.83187C14.5681 0.658447 12.5688 0.0291748 10.52 0.0291748C8.47126 0.0291748 6.47195 0.658447 4.79252 1.83187C3.1131 3.00529 1.83461 4.66623 1.13001 6.59C1.13001 6.59 1.13001 6.59 1.13001 6.64C0.343137 8.8109 0.343137 11.1891 1.13001 13.36C1.13001 13.36 1.13001 13.36 1.13001 13.41C1.83461 15.3338 3.1131 16.9947 4.79252 18.1681C6.47195 19.3416 8.47126 19.9708 10.52 19.9708C12.5688 19.9708 14.5681 19.3416 16.2475 18.1681C17.9269 16.9947 19.2054 15.3338 19.91 13.41C19.91 13.41 19.91 13.41 19.91 13.36C20.6969 11.1891 20.6969 8.8109 19.91 6.64V6.64ZM2.76001 12C2.41324 10.6892 2.41324 9.31079 2.76001 8H4.62001C4.46004 9.32854 4.46004 10.6715 4.62001 12H2.76001ZM3.58001 14H4.98001C5.21473 14.8918 5.55022 15.7541 5.98001 16.57C4.99931 15.9019 4.17951 15.0241 3.58001 14ZM4.98001 6H3.58001C4.17088 4.97909 4.9802 4.10147 5.95001 3.43C5.53057 4.24725 5.20515 5.10942 4.98001 6V6ZM9.50001 17.7C8.27178 16.7987 7.40916 15.4852 7.07001 14H9.50001V17.7ZM9.50001 12H6.64001C6.4534 10.6732 6.4534 9.32681 6.64001 8H9.50001V12ZM9.50001 6H7.07001C7.40916 4.51477 8.27178 3.20132 9.50001 2.3V6ZM17.42 6H16.02C15.7853 5.10816 15.4498 4.24594 15.02 3.43C16.0007 4.09807 16.8205 4.97594 17.42 6ZM11.5 2.3C12.7282 3.20132 13.5909 4.51477 13.93 6H11.5V2.3ZM11.5 17.7V14H13.93C13.5909 15.4852 12.7282 16.7987 11.5 17.7V17.7ZM14.36 12H11.5V8H14.36C14.5466 9.32681 14.5466 10.6732 14.36 12ZM15.05 16.57C15.4798 15.7541 15.8153 14.8918 16.05 14H17.45C16.8505 15.0241 16.0307 15.9019 15.05 16.57ZM18.24 12H16.38C16.4613 11.3365 16.5014 10.6685 16.5 10C16.5011 9.33151 16.461 8.66357 16.38 8H18.24C18.5868 9.31079 18.5868 10.6892 18.24 12Z"
        fill="#BABEC9"
      />
      <path
        d="M19.91 6.64C19.91 6.64 19.91 6.64 19.91 6.59C19.2054 4.66623 17.9269 3.00529 16.2475 1.83187C14.5681 0.658447 12.5688 0.0291748 10.52 0.0291748C8.47126 0.0291748 6.47195 0.658447 4.79252 1.83187C3.1131 3.00529 1.83461 4.66623 1.13001 6.59C1.13001 6.59 1.13001 6.59 1.13001 6.64C0.343137 8.8109 0.343137 11.1891 1.13001 13.36C1.13001 13.36 1.13001 13.36 1.13001 13.41C1.83461 15.3338 3.1131 16.9947 4.79252 18.1681C6.47195 19.3416 8.47126 19.9708 10.52 19.9708C12.5688 19.9708 14.5681 19.3416 16.2475 18.1681C17.9269 16.9947 19.2054 15.3338 19.91 13.41C19.91 13.41 19.91 13.41 19.91 13.36C20.6969 11.1891 20.6969 8.8109 19.91 6.64V6.64ZM2.76001 12C2.41324 10.6892 2.41324 9.31079 2.76001 8H4.62001C4.46004 9.32854 4.46004 10.6715 4.62001 12H2.76001ZM3.58001 14H4.98001C5.21473 14.8918 5.55022 15.7541 5.98001 16.57C4.99931 15.9019 4.17951 15.0241 3.58001 14ZM4.98001 6H3.58001C4.17088 4.97909 4.9802 4.10147 5.95001 3.43C5.53057 4.24725 5.20515 5.10942 4.98001 6V6ZM9.50001 17.7C8.27178 16.7987 7.40916 15.4852 7.07001 14H9.50001V17.7ZM9.50001 12H6.64001C6.4534 10.6732 6.4534 9.32681 6.64001 8H9.50001V12ZM9.50001 6H7.07001C7.40916 4.51477 8.27178 3.20132 9.50001 2.3V6ZM17.42 6H16.02C15.7853 5.10816 15.4498 4.24594 15.02 3.43C16.0007 4.09807 16.8205 4.97594 17.42 6ZM11.5 2.3C12.7282 3.20132 13.5909 4.51477 13.93 6H11.5V2.3ZM11.5 17.7V14H13.93C13.5909 15.4852 12.7282 16.7987 11.5 17.7V17.7ZM14.36 12H11.5V8H14.36C14.5466 9.32681 14.5466 10.6732 14.36 12ZM15.05 16.57C15.4798 15.7541 15.8153 14.8918 16.05 14H17.45C16.8505 15.0241 16.0307 15.9019 15.05 16.57ZM18.24 12H16.38C16.4613 11.3365 16.5014 10.6685 16.5 10C16.5011 9.33151 16.461 8.66357 16.38 8H18.24C18.5868 9.31079 18.5868 10.6892 18.24 12Z"
        fill="black"
        fillOpacity="0.2"
      />
    </svg>
  );
};
