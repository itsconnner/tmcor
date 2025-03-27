import { useState } from 'react';
import C from '~/utils/C';

function Logo({ scale = 1, className }) {
    return (
        <svg className={ className } width={ 554 * scale } height={ 160 * scale } viewBox='0 0 554 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g filter='url(#filter0_d_224_2)'>
                <path d='M70.3318 55.9263C77.328 55.9263 83.6972 57.3175 89.4393 60.0999C95.2475 62.8823 99.8676 66.6279 103.3 71.3366C106.732 75.9918 108.448 81.1553 108.448 86.8272C108.448 94.7464 105.247 101.569 98.8446 107.294C92.5084 113.019 84.4892 116.417 74.7869 117.487L111.517 148.95L108.151 151.518L69.9358 118.852V150.475H13.8013V55.9263H70.3318ZM69.9358 114.357H70.3318C79.5721 114.036 87.4593 111.227 93.9935 105.93C100.528 100.632 103.795 94.2648 103.795 86.8272C103.795 79.3361 100.528 72.9419 93.9935 67.6446C87.4593 62.3473 79.5721 59.6986 70.3318 59.6986H69.9358V114.357ZM9.04914 55.9263V150.395H4V55.9263H9.04914Z' fill='#9C3030' />
                <path d='M174.78 57.8526V148.147C189.432 147.666 202.038 143.251 212.599 134.904C223.489 125.701 228.934 115.079 228.934 103.04C228.934 90.9473 223.489 80.2992 212.599 71.0958C202.038 62.7486 189.432 58.3342 174.78 57.8526ZM170.127 54.0803C171.051 54.0268 172.008 54 172.998 54H174.78C185.736 54.3746 195.636 56.7557 204.48 61.1433C213.325 65.531 220.387 71.3901 225.667 78.7207C230.947 86.0513 233.587 94.1578 233.587 103.04C233.587 111.869 230.947 119.949 225.667 127.279C220.387 134.61 213.325 140.469 204.48 144.857C195.636 149.244 185.736 151.625 174.78 152H172.998C172.008 152 171.051 151.973 170.127 151.92V54.0803ZM165.077 151.599C157.025 150.796 149.534 148.709 142.604 145.338C133.43 140.951 126.103 135.065 120.625 127.681C115.213 120.243 112.507 112.029 112.507 103.04C112.507 93.9973 115.213 85.7838 120.625 78.3997C126.103 70.9621 133.43 65.0227 142.604 60.5815C149.534 57.264 157.025 55.2039 165.077 54.4013V151.599Z' fill='#9C3030' />
                <path d='M309.522 59.6986V84.4996C310.512 84.4461 311.502 84.4193 312.492 84.4193C317.971 84.4193 323.119 85.222 327.937 86.8272C330.049 83.9913 331.105 80.9145 331.105 77.5971C331.105 72.7813 328.96 68.5542 324.67 64.9156C320.446 61.5981 315.397 59.8591 309.522 59.6986ZM309.522 99.2678V146.622H312.492C322.129 146.622 330.61 143.76 337.936 138.034C344.998 132.095 348.529 125.219 348.529 117.407C348.529 109.595 344.998 102.719 337.936 96.7797C335.428 94.6929 332.59 92.9539 329.422 91.5627C324.406 96.3784 317.773 98.9468 309.522 99.2678ZM309.522 88.2719V95.4955C315.397 95.335 320.446 93.596 324.67 90.2785C324.736 90.1714 324.835 90.0644 324.967 89.9574C321.007 88.7802 316.849 88.1916 312.492 88.1916C311.502 88.1916 310.512 88.2184 309.522 88.2719ZM248.636 150.395H243.587V55.846H248.636V150.395ZM253.388 55.846H309.522C316.981 56.1136 323.218 58.3342 328.234 62.5078C333.25 66.6279 335.758 71.6577 335.758 77.5971C335.758 81.5566 334.57 85.1952 332.194 88.5127C338.53 91.4021 343.612 95.3885 347.44 100.472C351.269 105.555 353.183 111.2 353.183 117.407C353.183 123.453 351.335 128.992 347.638 134.021C344.008 138.998 339.124 142.984 332.986 145.98C326.848 148.923 320.017 150.395 312.492 150.395H253.388V55.846Z' fill='#9C3030' />
                <path d='M429.316 55.846V150.395H372.983V55.846H429.316ZM368.231 150.395H363.182V55.846H368.231V150.395Z' fill='#9C3030' />
                <path d='M550 105.609V152L448.819 111.548V150.395H444.166V62.9894L550 105.609ZM444.166 58.4947V54.0803L545.347 94.5324V55.846H550V101.114L444.166 58.4947Z' fill='#9C3030' />
            </g>
            <g filter='url(#filter1_d_224_2)'>
                <path d='M107.64 15.832C114.744 15.832 123.832 15.064 127.8 11.032L125.304 17.048H102.264C99.32 23.128 94.776 32.344 93.624 34.712C85.624 50.904 77.176 66.776 57.848 71.32C50.808 72.92 40.376 72.024 36.28 66.904L38.264 59.352C38.904 68.184 49.784 71.832 57.4 70.36C73.592 66.392 82.232 48.6 89.08 34.648L97.912 17.048H90.36C80.632 17.048 73.464 17.688 65.144 23.512C58.552 28.12 53.752 34.84 52.344 42.264C51.384 47.32 51.832 52.952 55.544 55.32C58.104 56.92 62.584 56.28 65.4 55.32C71.544 53.272 75.896 48.92 78.904 44.44C83.256 37.784 85.816 24.408 73.528 27.224L81.592 22.552C90.488 24.728 83.064 40.152 79.672 45.016C76.28 49.944 71.48 54.296 65.656 56.28C62.584 57.24 58.232 58.008 55.096 57.24C47.736 55.448 45.88 47.448 47.736 40.344C50.168 31.448 56.12 24.984 63.864 20.888C72.888 16.152 80.76 15.832 90.488 15.832C93.944 15.832 104.184 15.832 107.64 15.832ZM113.082 50.712C113.402 50.136 113.85 50.456 113.594 50.968C109.306 58.136 103.546 63 99.7705 63C97.7865 63 95.9945 60.632 99.0665 55.128L104.122 45.976C106.17 42.328 103.546 43.096 100.282 45.656C98.6825 46.936 96.9545 48.728 95.6105 50.904L89.0185 62.616H82.3625C86.3305 59.48 89.4665 51.8 91.7065 47.128C95.7385 38.552 99.9625 30.296 104.506 23.896C106.746 23.768 108.794 22.872 110.714 21.4C105.21 28.504 100.282 38.424 95.4825 48.792C99.5145 43.928 103.93 41.944 106.298 41.944C108.218 41.944 110.138 44.312 107.066 49.816L102.01 58.968C99.7705 63 102.97 61.272 105.658 59.352C107.962 57.688 111.098 54.168 113.082 50.712ZM131.76 50.712C132.08 50.136 132.528 50.456 132.272 50.968C130.352 54.168 128.112 57.048 125.04 59.48C121.456 62.232 117.552 63.896 112.88 62.552C109.552 61.72 107.12 57.816 109.68 52.12C112.176 46.68 117.808 41.944 124.144 41.944C127.664 41.944 130.288 44.12 127.792 47.896C125.552 51.48 119.088 53.528 113.584 54.424C112.368 57.304 112.304 59.928 114.096 61.016C116.912 62.744 121.264 61.272 124.72 58.776C127.408 56.6 129.776 53.976 131.76 50.712ZM115.696 50.52C114.992 51.608 114.416 52.632 113.904 53.656C117.936 52.824 121.2 50.712 123.376 47.128C124.912 44.568 124.976 42.712 123.568 42.712C121.84 42.712 118.448 46.04 115.696 50.52ZM259.808 17.624L256.288 20.632C256.8 13.976 251.744 9.432 243.232 11.224C233.184 13.336 224.992 27.032 217.376 42.84C216.416 44.824 215.456 46.808 214.56 48.856C213.536 50.968 208.736 60.312 209.504 61.144C210.208 61.848 212.704 60.76 214.624 59.48C218.272 57.112 220.576 54.296 222.944 50.648C223.328 50.072 223.712 50.392 223.456 50.84C220.256 56.28 215.008 61.528 209.76 62.68C208.48 63 206.752 63.192 205.856 61.912C204.448 60.056 206.88 55.576 208.864 51.16C210.784 47 212.768 42.904 214.752 38.936L211.424 43.416C209.056 46.552 203.168 54.488 198.368 59.16C196.128 61.4 194.272 63.512 191.2 62.488L197.088 37.848C189.536 52.888 180.96 67.032 162.848 71.32C155.808 72.92 145.376 72.024 141.28 66.904L143.264 59.352C143.968 68.184 154.784 71.832 162.4 70.36C178.656 66.392 187.296 48.6 194.144 34.648C196.128 30.488 198.304 25.88 199.712 22.488C196.384 22.488 195.808 22.488 195.744 22.488C195.68 22.488 195.168 22.488 191.776 22.488C182.048 22.488 174.944 23.192 166.56 29.016C160.032 33.624 155.168 40.28 153.76 47.768C152.8 52.76 153.248 58.456 157.024 60.76C159.584 62.36 164 61.72 166.816 60.76C172.96 58.712 177.312 54.36 180.32 49.88C184.736 43.288 187.232 29.912 174.944 32.664L183.008 28.056C191.904 30.168 184.48 45.592 181.152 50.52C177.76 55.384 172.896 59.736 167.072 61.72C164 62.68 159.712 63.448 156.512 62.68C149.216 60.888 147.296 52.888 149.152 45.784C151.584 36.888 157.6 30.424 165.344 26.328C174.304 21.656 182.176 21.272 191.904 21.272C202.464 21.272 195.616 21.272 206.112 21.272L197.28 59.032C198.816 57.496 200.416 55.64 201.568 54.296C208.8 45.656 214.368 37.464 218.336 32.216C222.048 25.752 225.888 20.12 230.048 16.28C234.848 11.736 240.288 8.92 246.176 9.368C250.912 9.688 257.504 11.8 259.808 17.624ZM244.841 50.584C245.161 50.072 245.609 50.392 245.353 50.84C241.065 58.008 235.241 62.936 231.529 62.936C229.865 62.936 228.393 61.144 229.865 57.176C227.113 59.992 223.017 62.936 220.649 62.936C218.729 62.936 216.809 60.504 219.881 55L225.193 45.4C227.561 45.08 229.737 43.992 231.785 42.2C228.713 47.768 225.705 53.272 222.697 58.84C220.649 62.552 223.657 61.336 226.793 58.776C228.393 57.496 230.249 55.768 231.721 53.656L237.993 42.2H242.985L233.769 58.904C231.529 62.936 234.729 61.208 237.353 59.288C239.657 57.56 242.857 54.104 244.841 50.584ZM261.59 50.584C261.91 50.072 262.358 50.392 262.102 50.84C260.438 53.656 258.71 55.896 256.854 57.816C254.934 59.864 251.862 62.936 248.854 62.936C246.934 62.872 245.206 60.44 248.406 55.064C251.67 49.24 251.286 47 248.918 45.016C246.934 49.176 244.566 52.248 241.686 55.832C241.174 56.472 240.79 56.216 241.238 55.64C243.542 52.76 246.55 47.704 248.022 44.12C247.382 43.352 246.934 42.584 246.678 41.752C245.91 39.704 246.102 37.528 246.806 36.056C247.318 35.16 248.15 34.584 248.918 34.392C249.366 34.328 249.75 34.328 250.134 34.456C250.518 34.648 250.838 34.84 251.094 35.224C251.542 35.864 251.734 36.888 251.35 38.296C250.902 40.216 250.198 42.072 249.43 43.864C253.654 46.488 256.726 49.24 253.846 54.424L251.222 58.904C248.918 62.936 251.542 61.464 254.102 59.416C256.342 57.624 259.606 54.104 261.59 50.584ZM248.534 42.84C249.238 41.24 249.814 39.64 250.198 38.04C250.454 36.952 250.39 36.312 250.134 35.928C250.006 35.8 249.878 35.672 249.75 35.608C249.558 35.544 249.366 35.544 249.174 35.608C248.662 35.672 248.214 36.056 247.894 36.632C247.254 37.784 247.126 39.576 247.766 41.304C247.958 41.816 248.214 42.328 248.534 42.84ZM284.164 50.52C284.484 50.008 284.932 50.328 284.676 50.84C282.372 54.68 279.364 58.008 276.74 60.248C274.82 61.656 269.7 64.728 268.228 61.528C267.908 60.824 267.78 59.8 268.164 58.392C265.732 61.208 263.108 62.872 260.676 62.872C256.068 62.68 256.388 57.176 259.14 52.312C261.572 47.896 267.268 40.856 272.58 41.752C274.308 42.072 274.948 43.544 274.692 45.72C278.66 38.36 283.524 30.36 288.964 23.768L289.028 23.896C291.204 23.768 293.252 22.872 295.172 21.4C289.54 28.056 284.548 37.016 280.004 45.4C277.508 49.88 275.012 54.36 272.516 58.84C270.276 62.872 274.052 61.272 276.74 59.224C279.044 57.304 282.18 54.04 284.164 50.52ZM262.66 61.464C264.388 61.464 268.1 57.624 271.044 52.248C273.988 46.936 274.692 43.288 272.836 43.288C271.108 43.352 267.204 46.936 264.26 52.248C261.316 57.624 260.356 61.464 262.66 61.464ZM303.01 50.712C303.33 50.136 303.778 50.456 303.522 50.968C301.602 54.168 299.362 57.048 296.29 59.48C292.706 62.232 288.802 63.896 284.13 62.552C280.802 61.72 278.37 57.816 280.93 52.12C283.426 46.68 289.058 41.944 295.394 41.944C298.914 41.944 301.538 44.12 299.042 47.896C296.802 51.48 290.338 53.528 284.834 54.424C283.618 57.304 283.554 59.928 285.346 61.016C288.162 62.744 292.514 61.272 295.97 58.776C298.658 56.6 301.026 53.976 303.01 50.712ZM286.946 50.52C286.242 51.608 285.666 52.632 285.154 53.656C289.186 52.824 292.45 50.712 294.626 47.128C296.162 44.568 296.226 42.712 294.818 42.712C293.09 42.712 289.698 46.04 286.946 50.52ZM319.778 50.584C320.098 50.072 320.546 50.392 320.29 50.84C318.626 53.656 316.898 55.896 315.042 57.816C313.122 59.864 310.05 62.936 307.042 62.936C305.122 62.872 303.394 60.44 306.594 55.064C309.858 49.24 309.474 47 307.106 45.016C305.122 49.176 302.754 52.248 299.874 55.832C299.362 56.472 298.978 56.216 299.426 55.64C301.73 52.76 304.738 47.704 306.21 44.12C305.57 43.352 305.122 42.584 304.866 41.752C304.098 39.704 304.29 37.528 304.994 36.056C305.506 35.16 306.338 34.584 307.106 34.392C307.554 34.328 307.938 34.328 308.322 34.456C308.706 34.648 309.026 34.84 309.282 35.224C309.73 35.864 309.922 36.888 309.538 38.296C309.09 40.216 308.386 42.072 307.618 43.864C311.842 46.488 314.914 49.24 312.034 54.424L309.41 58.904C307.106 62.936 309.73 61.464 312.29 59.416C314.53 57.624 317.794 54.104 319.778 50.584ZM306.722 42.84C307.426 41.24 308.002 39.64 308.386 38.04C308.642 36.952 308.578 36.312 308.322 35.928C308.194 35.8 308.066 35.672 307.938 35.608C307.746 35.544 307.554 35.544 307.362 35.608C306.85 35.672 306.402 36.056 306.082 36.632C305.442 37.784 305.314 39.576 305.954 41.304C306.146 41.816 306.402 42.328 306.722 42.84ZM362.688 25.24C342.592 31.832 322.24 68.888 342.016 71.128C346.176 71.576 351.552 70.04 356.736 66.84C361.728 63.768 369.28 55.704 372.672 50.84C372.992 50.264 373.568 50.648 373.248 51.096C369.536 56.536 362.368 64.152 357.44 67.416C352.448 70.808 346.432 72.92 341.952 72.728C333.312 72.344 327.808 66.392 329.664 57.048C332.352 44.056 344.96 29.4 360.896 23.512C354.944 18.136 344.896 11.8 332.736 16.6L336.512 11.224C349.504 10.52 356.48 17.432 362.176 23.064C364.288 22.232 366.528 21.656 368.576 21.464C372.288 21.08 374.528 22.104 375.552 23.512C378.368 27.352 372.992 33.496 367.36 29.464C365.888 28.504 364.416 26.968 362.688 25.24ZM368.704 22.744C367.168 23.128 365.44 23.832 363.776 24.664C365.376 26.264 366.784 27.608 368.064 28.504C372.544 31.704 376.64 26.968 374.592 24.216C373.824 23.128 371.648 21.976 368.704 22.744ZM394.838 50.712C395.158 50.136 395.606 50.456 395.35 50.968C391.062 58.136 385.238 63 381.526 63C379.99 63 378.582 61.656 379.414 58.456C376.982 61.336 374.358 63 371.926 63C367.318 62.808 367.638 57.368 370.39 52.44C373.014 47.704 379.158 39.832 385.43 42.392C387.094 43.032 388.31 44.312 388.502 46.488H390.55L386.326 54.296C385.686 55.448 382.806 60.44 383.766 61.08C384.214 61.336 385.494 60.696 387.35 59.352C389.718 57.688 392.79 54.168 394.838 50.712ZM373.91 61.656C375.638 61.656 379.35 57.752 382.294 52.376C385.238 47.064 385.942 43.416 384.086 43.416C382.358 43.48 378.454 47.064 375.51 52.376C372.566 57.752 371.606 61.656 373.91 61.656ZM408.774 45.592C409.222 47.768 407.622 49.496 405.51 49.496C404.102 49.496 402.95 48.536 403.078 47.32C403.206 45.976 404.422 45.08 405.83 45.08C406.15 45.08 406.47 45.144 406.79 45.208C406.79 43.48 404.998 42.456 403.526 42.52C398.278 42.648 400.39 48.472 401.478 51.992C402.118 54.36 402.566 56.984 401.03 59.352C399.558 61.464 396.998 62.936 393.862 62.936C391.43 62.936 389.19 61.848 389.19 59.48C389.254 58.584 389.574 57.624 390.086 56.92C390.598 56.216 391.238 55.896 391.814 55.832C393.286 53.464 395.334 50.072 396.55 48.088C396.422 44.632 398.406 41.496 403.526 41.816C406.534 42.008 408.39 43.736 408.774 45.592ZM397.894 58.2C399.046 55.704 397.702 53.336 397.062 50.968L396.806 49.944C395.526 51.928 393.99 54.36 392.838 56.152C393.158 56.536 393.222 57.24 392.454 58.072C391.75 58.968 390.278 59.672 391.686 60.952C392.006 61.208 392.518 61.4 393.158 61.4C395.27 61.4 397.062 60.056 397.894 58.2ZM430.135 50.712C430.455 50.136 430.903 50.456 430.647 50.968C428.727 54.168 426.487 57.048 423.415 59.48C419.831 62.232 415.927 63.896 411.255 62.552C407.927 61.72 405.495 57.816 408.055 52.12C410.551 46.68 416.183 41.944 422.519 41.944C426.039 41.944 428.663 44.12 426.167 47.896C423.927 51.48 417.463 53.528 411.959 54.424C410.743 57.304 410.679 59.928 412.471 61.016C415.287 62.744 419.639 61.272 423.095 58.776C425.783 56.6 428.151 53.976 430.135 50.712ZM414.071 50.52C413.367 51.608 412.791 52.632 412.279 53.656C416.311 52.824 419.575 50.712 421.751 47.128C423.287 44.568 423.351 42.712 421.943 42.712C420.215 42.712 416.823 46.04 414.071 50.52ZM488.999 50.264C489.319 49.816 489.831 50.2 489.639 50.648C484.583 60.888 472.167 67.992 463.399 67.032C459.943 68.632 456.423 69.592 453.159 69.592C440.615 69.592 436.007 56.472 442.855 40.28C449.703 24.152 465.447 11.032 477.991 11.032C481.255 11.032 484.007 11.928 486.183 13.592C470.887 6.488 456.167 24.088 448.871 40.28C443.687 52.632 442.727 68.376 453.671 68.376C455.975 68.376 458.343 67.672 460.711 66.456C456.231 64.856 453.351 60.504 454.055 52.504C455.399 37.144 471.591 13.656 483.623 14.68C495.335 15.832 491.239 33.304 488.295 40.28C483.815 50.776 475.623 59.992 466.983 65.176C475.495 65.816 485.095 57.24 488.999 50.264ZM463.847 64.472C471.527 59.032 478.631 48.856 482.279 40.28C484.455 35.032 485.927 29.144 485.991 24.152C486.183 16.216 480.743 14.424 474.663 19.48C461.863 29.784 449.575 59.096 463.847 64.472ZM510.067 34.456H500.275C498.995 36.824 497.715 39.384 496.499 41.944H503.603L501.427 44.696C500.723 43.544 499.571 43.288 496.947 43.096H495.923C494.515 45.976 493.171 48.856 491.891 51.8C483.571 70.04 473.395 91.288 452.275 96.216C445.235 97.88 434.803 96.92 430.707 91.864L432.691 84.248C433.395 93.144 444.211 96.792 451.827 95.256C470.067 90.84 480.115 67.032 487.539 51.16C488.819 48.408 490.099 45.72 491.379 43.096H487.411L488.051 41.944H491.955C493.235 39.384 494.515 36.888 495.795 34.456H490.739V33.24H492.467C499.571 33.24 508.595 32.472 512.627 28.44L510.067 34.456Z' fill='#FFFECC' />
            </g>
            <defs>
                <filter id='filter0_d_224_2' x='0' y='54' width='554' height='106' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_224_2' />
                    <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_224_2' result='shape' />
                </filter>
                <filter id='filter1_d_224_2' x='36.28' y='6.48804' width='476.347' height='95.392' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                    <feOffset dy='4' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0' />
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_224_2' />
                    <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_224_2' result='shape' />
                </filter>
            </defs>
        </svg>);
}

export default function Header() {
    const [open, set_open] = useState(0);

    return (
        <header className={ C('fixed w-full touch-pan-y pt-4 px-6 z-39',
            'text-2xl font-medium **:uppercase',
            open && 'touch-none') }>
            <div className={ C('absolute xl:hidden left-0 top-0 h-screen w-screen',
                'transition-color duration-400',
                open && 'touch-none bg-[#020409]/80 h-full') }/>
            <div className='relative flex justify-between'>
                <div>
                    <Logo className='w-3/4 xl:w-full' scale={ 0.5 }/>
                </div>
                <div className='*:items-center *:h-full'>
                    <div className='hidden xl:flex gap-16 mt-4 mr-10'>
                        <button>sound</button>
                        <button>[ EN ] /CN</button>
                        <button>pre-order now</button>
                    </div>
                    <div onClick={() => set_open(v => !v)} className='xl:hidden flex mt-1'>
                        <span className='mr-3 pt-2'>menu</span>
                        <div className='*:relative *:h-1 *:w-8 *:bg-[#E1E1E1]
                        *:rounded-3xl *:transition-all *:duration-200'>
                            <div className={ C('top-0', open && 'rotate-45 top-[10px]') }/>
                            <div className={ C('top-0 my-[6px]',
                                open && 'rotate-45 opacity-0') }/>
                            <div className={ open ? '-rotate-45 -top-[10px]' : 'top-0' }/>
                        </div>
                    </div>
                </div>
                <ul className={ C('absolute xl:hidden left-0 top-full',
                    'w-full h-screen mt-15',
                    '*:w-full *:py-5 text-3xl',
                    '*:flex *:flex-col *:justify-between',
                    '*:transition-all *:duration-200',
                    open ? '*:opacity-100 *:translate-y-0' :
                        '*:opacity-0 *:-translate-y-10') }>
                    <li>
                        <button>sound</button>
                    </li>
                    <li className='delay-100'>
                        <button>[ EN ] /CN</button>
                    </li>
                    <li className='delay-200'>
                        <button>pre-order now</button>
                    </li>
                </ul>
            </div>
        </header>);
}
