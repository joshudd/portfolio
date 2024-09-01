import React from 'react';

const linkarrowIcon = () => { 
    return (
        <div className="relative -top-0.5">
            <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-text-hover-color">
                <path 
                    d="M6.67969 24.5977H20.8945C23.3555 24.5977 24.5742 23.3789 24.5742 20.9648V6.65625C24.5742 4.24219 23.3555 3.02344 20.8945 3.02344H6.67969C4.23047 3.02344 3 4.23047 3 6.65625V20.9648C3 23.3906 4.23047 24.5977 6.67969 24.5977ZM6.70312 22.7109C5.53125 22.7109 4.88672 22.0898 4.88672 20.8711V6.75C4.88672 5.53125 5.53125 4.91016 6.70312 4.91016H20.8711C22.0312 4.91016 22.6875 5.53125 22.6875 6.75V20.8711C22.6875 22.0898 22.0312 22.7109 20.8711 22.7109H6.70312Z" 
                    fill="currentColor"
                />
                <path 
                    d="M17.4609 16.6992C17.9766 16.6992 18.3281 16.3008 18.3281 15.7617V10.2305C18.3281 9.53906 17.9414 9.26953 17.3438 9.26953H11.7891C11.2383 9.26953 10.8867 9.60938 10.8867 10.125C10.8867 10.6406 11.25 10.9805 11.8125 10.9805H13.9453L15.6797 10.793L13.8516 12.4922L9.52734 16.8164C9.36328 16.9805 9.25781 17.2148 9.25781 17.4492C9.25781 17.9766 9.59766 18.3164 10.1133 18.3164C10.3945 18.3164 10.6172 18.2109 10.7813 18.0469L15.0938 13.7344L16.7812 11.9297L16.6055 13.7578V15.7852C16.6055 16.3359 16.9453 16.6992 17.4609 16.6992Z" 
                    fill="currentColor"
                />
            </svg>
        </div>
    );
}

const speakerIcon = () => { 
    return (
        <div className="relative -top-0.5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-text-hover-color">
                <path 
                    d="M5 5.32812V22.9297C5 25.1445 6.10156 26.2578 8.29297 26.2578H19.6836C21.875 26.2578 22.9648 25.1445 22.9648 22.9297V5.32812C22.9648 3.11328 21.875 2 19.6836 2H8.29297C6.10156 2 5 3.11328 5 5.32812ZM6.88672 5.35156C6.88672 4.39062 7.39062 3.88672 8.36328 3.88672H19.6133C20.5859 3.88672 21.0781 4.39062 21.0781 5.35156V22.9062C21.0781 23.8555 20.5742 24.3711 19.6133 24.3711H8.36328C7.39062 24.3711 6.88672 23.8555 6.88672 22.9062V5.35156ZM13.9883 22.4844C16.6367 22.4844 18.7695 20.3633 18.7695 17.7031C18.7695 15.043 16.6367 12.9336 13.9883 12.9219C11.3398 12.9102 9.20703 15.043 9.20703 17.7031C9.20703 20.3633 11.3398 22.4844 13.9883 22.4844ZM13.9883 19.7305C12.875 19.7305 11.9609 18.8281 11.9609 17.7031C11.9609 16.543 12.8398 15.6641 13.9883 15.6641C15.125 15.6641 16.0156 16.543 16.0156 17.7031C16.0156 18.8281 15.125 19.7305 13.9883 19.7305ZM13.9883 11.082C15.4531 11.082 16.6719 9.89844 16.6484 8.42188C16.6367 6.94531 15.4531 5.78516 13.9883 5.77344C12.5117 5.76172 11.3281 6.93359 11.3281 8.42188C11.3281 9.89844 12.5117 11.082 13.9883 11.082ZM13.9883 9.78125C13.2266 9.78125 12.6289 9.16016 12.6289 8.42188C12.6289 7.63672 13.2266 7.0625 13.9883 7.0625C14.7266 7.0625 15.3477 7.67188 15.3477 8.42188C15.3477 9.16016 14.7383 9.78125 13.9883 9.78125Z"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
}

const cropIcon = () => { 
    return (
        <div className="relative left-0.5 -top-0.5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-text-hover-color">
                <g clip-path="url(#clip0_419_5807)">
                    <path 
                        d="M26.6992 20.8633C26.6992 20.3125 26.3359 19.9727 25.7617 19.9727H8.86328C8.60547 19.9727 8.52344 19.8906 8.52344 19.6328V2.73438C8.52344 2.14844 8.14844 1.75 7.57422 1.75C7.01172 1.75 6.63672 2.14844 6.63672 2.73438V20.8164C6.63672 21.3789 7 21.7422 7.5625 21.7422H25.7617C26.3359 21.7422 26.6992 21.4023 26.6992 20.8633ZM1 8.26562C1 8.82812 1.36328 9.15625 1.92578 9.15625H18.8359C19.0938 9.15625 19.1758 9.25 19.1758 9.49609V26.3945C19.1758 26.9805 19.5508 27.3789 20.1133 27.3789C20.6875 27.3789 21.0625 26.9805 21.0625 26.3945V8.32422C21.0625 7.76172 20.6992 7.38672 20.1367 7.38672H1.92578C1.36328 7.38672 1 7.72656 1 8.26562Z"
                        fill="currentColor"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_419_5807">
                        <rect width="25.6992" height="26.3789" fill="currentColor" transform="translate(1 1)"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

const chatIcon = () => {  
    return (
        <div className="relative left-1 -top-0.5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-text-hover-color">
                <path 
                    d="M7.20703 25.7461C7.78125 25.7461 8.17969 25.4414 8.89453 24.8086L12.9375 21.2109H20.4609C23.9531 21.2109 25.8281 19.2773 25.8281 15.8438V6.86719C25.8281 3.43359 23.9531 1.5 20.4609 1.5H5.36719C1.875 1.5 0 3.42188 0 6.86719V15.8438C0 19.2891 1.875 21.2109 5.36719 21.2109H5.92969V24.2578C5.92969 25.1602 6.38672 25.7461 7.20703 25.7461ZM7.6875 23.6016V20.2031C7.6875 19.5703 7.44141 19.3242 6.80859 19.3242H5.36719C3 19.3242 1.88672 18.1172 1.88672 15.832V6.86719C1.88672 4.58203 3 3.38672 5.36719 3.38672H20.4609C22.8164 3.38672 23.9414 4.58203 23.9414 6.86719V15.832C23.9414 18.1172 22.8164 19.3242 20.4609 19.3242H12.8672C12.2109 19.3242 11.8828 19.418 11.4375 19.875L7.6875 23.6016Z" 
                    fill="currentColor"/>
                <path 
                    d="M5.50781 12.7148H10.3359C10.7109 12.7148 11.0156 12.4102 11.0156 12.0234C11.0156 11.6602 10.7109 11.3555 10.3359 11.3555H5.50781C5.13281 11.3555 4.82812 11.6602 4.82812 12.0234C4.82812 12.4102 5.13281 12.7148 5.50781 12.7148ZM12.7617 12.7148H20.3438C20.7188 12.7148 21.0117 12.4102 21.0117 12.0234C21.0117 11.6602 20.7188 11.3555 20.3438 11.3555H12.7617C12.3867 11.3555 12.082 11.6602 12.082 12.0234C12.082 12.4102 12.3867 12.7148 12.7617 12.7148ZM5.50781 15.7734H7.5C7.875 15.7734 8.16797 15.4805 8.16797 15.1055C8.16797 14.7188 7.875 14.4141 7.5 14.4141H5.50781C5.13281 14.4141 4.82812 14.7188 4.82812 15.1055C4.82812 15.4805 5.13281 15.7734 5.50781 15.7734ZM9.91406 15.7734H15.7852C16.1602 15.7734 16.4648 15.4805 16.4648 15.1055C16.4648 14.7188 16.1602 14.4141 15.7852 14.4141H9.91406C9.53906 14.4141 9.24609 14.7188 9.24609 15.1055C9.24609 15.4805 9.53906 15.7734 9.91406 15.7734ZM18.2109 15.7734H20.3438C20.7188 15.7734 21.0117 15.4805 21.0117 15.1055C21.0117 14.7188 20.7188 14.4141 20.3438 14.4141H18.2109C17.8359 14.4141 17.5312 14.7188 17.5312 15.1055C17.5312 15.4805 17.8359 15.7734 18.2109 15.7734Z" 
                    fill="currentColor"
                />
            </svg>
        </div>
    );
}

const documentIcon = () => { 
    return (
        <div className="relative left-1 -top-0.5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-text-hover-color">
                <g clip-path="url(#clip0_419_5804)">
                    <path 
                        d="M18.168 15.1328H9.27344C8.85156 15.1328 8.53516 15.4492 8.53516 15.8477C8.53516 16.2578 8.85156 16.5742 9.27344 16.5742H18.168C18.5781 16.5742 18.8828 16.2578 18.8828 15.8477C18.8828 15.4492 18.5781 15.1328 18.168 15.1328ZM18.168 19.2227H9.27344C8.85156 19.2227 8.53516 19.5508 8.53516 19.9609C8.53516 20.3594 8.85156 20.6641 9.27344 20.6641H18.168C18.5781 20.6641 18.8828 20.3594 18.8828 19.9609C18.8828 19.5508 18.5781 19.2227 18.168 19.2227ZM7.63281 26.125H20.0781C22.5039 26.125 23.7109 24.8945 23.7109 22.457V11.8164C23.7109 10.3047 23.5352 9.64844 22.5977 8.6875L16.1406 2.11328C15.25 1.19922 14.5117 1 13.1992 1H7.63281C5.21875 1 4 2.24219 4 4.67969V22.457C4 24.9062 5.20703 26.125 7.63281 26.125ZM7.71484 24.2383C6.50781 24.2383 5.88672 23.5938 5.88672 22.4219V4.71484C5.88672 3.55469 6.50781 2.88672 7.72656 2.88672H12.9414V9.69531C12.9414 11.1719 13.6797 11.8984 15.1445 11.8984H21.8242V22.4219C21.8242 23.5938 21.2031 24.2383 19.9844 24.2383H7.71484ZM15.3555 10.1289C14.8867 10.1289 14.7109 9.94141 14.7109 9.47266V3.25L21.4609 10.1289H15.3555Z" 
                        fill="currentColor"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_419_5804">
                        <rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4 1)"/>
                </clipPath>
            </defs>
            </svg>
        </div>
    );
}

export { linkarrowIcon, speakerIcon, cropIcon, chatIcon, documentIcon };