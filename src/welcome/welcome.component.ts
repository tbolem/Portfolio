import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, HostListener, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.sass'
})
export class WelcomeComponent {

  skills = [
  {
    category: 'Backend',
    icon: 'Skills/backend.png',
    icons: [
      'https://imgs.search.brave.com/znYffCNDe9NNk1HcibEHioP25KvDTVnok6_cRDWr-es/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvamF2/YS1wcm9ncmFtbWlu/Zy1sYW5ndWFnZS1s/b2dvLXRyYW5zcGFy/ZW50LW8xZzBud2xo/eWV1MWVuN3MtMi5w/bmc',
      'https://imgs.search.brave.com/OJUPyVebxcE5uj9CR0LLGrzNT-95hETdcGdGT0Gjnf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM4LzIvc3ByaW5n/LWJvb3QtbG9nby1w/bmdfc2Vla2xvZ28t/Mzg1NTAzLnBuZw',
      'Icons/backend/maven.svg',
      'Icons/backend/microservices.png',
      'Icons/backend/rest-api-icon.svg',
      'https://imgs.search.brave.com/blw7hZW6-nyqy1vhb2Nr7fy2S8BTD3AOQpZNjyNvqtQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iMTQ3/MjkyMy5zbXVzaGNk/bi5jb20vMTQ3Mjky/My93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMi9qdW5pdC1s/b2dvLnBuZz9sb3Nz/eT0wJnN0cmlwPTEm/d2VicD0x',
      'https://imgs.search.brave.com/-W9dis3v_pi48yZ7Fgde5VmxRZd-mtTHXtFu4MS-nBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qd3Qu/dHBsYW50LmNvbS5h/dS9pbWcvYXV0aDBf/bG9nby5zdmc',
      'Icons/backend/jwt.png',
    ]
  },
  {
    category: 'Database',
    icon: 'Skills/database.png',
    icons: [
      'https://imgs.search.brave.com/ZExw--cPQbl65wiF5zoypf7SJ8u7Xn2EwXQQ6LykWko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMjY5OS9Q/TkcvNTEyL2hpYmVy/bmF0ZV9sb2dvX2lj/b25fMTY5MDM0LnBu/Zw',
      'https://imgs.search.brave.com/rKEunXBQemszVnXGEcoWWp-Lh1XEdWBLPt4pGsK3Lrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmd0/ZWFtLmNvbS9pbWFn/ZXMvbXlzcWwtbG9n/by1wbmctNTEyeDI2/OF9kMTk1YjMyMV90/cmFuc3BhcmVudC5w/bmc',
      'https://imgs.search.brave.com/EafdQ8LlOtwZDIdP_Q21CYEyuj5y0nmzlZ6_5rlIDKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTW9u/Z29kYi1UcmFuc3Bh/cmVudC5wbmc',
      'https://imgs.search.brave.com/AwJ2e6afqvCpfBlQJtED7me8QGtaaBLDrq_ISfCKfIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmd0/ZWFtLmNvbS9pbWFn/ZXMvcGhwLWxvZ28t/cG5nLTEwNTF4NTUx/XzUzMzEzMjkxX3Ry/YW5zcGFyZW50LnBu/Zw',
      'https://imgs.search.brave.com/AkQTtZsGbup_4tmKWn0RIh3AD0SCM-uZblKbDgHSHes/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Nu/Y2YvbGFuZHNjYXBl/L21hc3Rlci9ob3N0/ZWRfbG9nb3MvcmVk/aXMuc3Zn',
      'https://imgs.search.brave.com/C1MNrSDeKV6W240Fb0Up7Gd4aSd2TanlXwGOtJ-C_tA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nZGVzaWduLmNv/bS9jb250ZW50L3Vw/bG9hZHMvaW1hZ2Vz/L3AyMS00Ni1hcGFj/aGUtdG9tY2F0LTMw/MTYyNzI5MDMucG5n'
    ]
  },
  {
    category: 'Frontend',
    icon: 'Skills/frontend.png',
    icons: [
      'https://imgs.search.brave.com/PF4DYxWxgZMz8G6hfcNbS0xJt8MJhKcrMygAQY1wZaI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzUwLzIvYW5ndWxh/ci1pY29uLWxvZ28t/cG5nX3NlZWtsb2dv/LTUwNzMyNC5wbmc',
      'https://imgs.search.brave.com/cOEu3_W1iTAYlQuWmTB1_7JD1w0Sl6fPV9Kr46QRoH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvVFlQRSUyMFND/UklQVCUyMExPR08u/c3Zn',
      'https://imgs.search.brave.com/XBU8ukj1zPwD-yIu_S3popcI2VFcZR5BB_k4utJDAwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZHBu/Zy5jb20vaW1hZ2Vz/L2Jvb3RzdHJhcC1s/b2dvLXBuZy1vcGVu/LTIwMDAucG5n',
      'https://imgs.search.brave.com/3BFATtMXY46M1mm5r7MaGJLpnPXupw2IZVVHHk8ZGRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cG5nZ2FsbGVyeS5j/b20vd3AtY29udGVu/dC91cGxvYWRzL2h0/bWwtbG9nby0wMi5w/bmc',
      'https://imgs.search.brave.com/lV43XijqCcOIf8S72xipUZS3OJGx_YX_NGNOpBoXKH4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvY3Nz/My1sb2dvLXBuZy10/cmFuc3BhcmVudC5w/bmc',
      'https://imgs.search.brave.com/MBa2DUYxfNmPfckU4KfOP1mui9pBWQggsglZZ8wDeSw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2phdmFzY3JpcHQt/cG5nL2phdmFzY3Jp/cHQtdmVjdG9yLWxv/Z28teWVsbG93LXBu/Zy10cmFuc3BhcmVu/dC1qYXZhc2NyaXB0/LXZlY3Rvci0xMi5w/bmc',
      'https://imgs.search.brave.com/RZ9dNy4rkWi7xBN1QkUbky_ShgTQGP1ACs8yia-qA-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ub2Rl/anMub3JnL3N0YXRp/Yy9sb2dvcy9ub2Rl/anNEYXJrLnN2Zw'
    ]
  },
  {
    category: 'Tools',
    icon: 'Skills/tools.png',
    icons: [
      'https://imgs.search.brave.com/HO4B6DcmF0ESz9PnixxhqcD2sz0iPzFln3JUYttLRVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NaWNyb3Nv/ZnRfQXp1cmUvTWlj/cm9zb2Z0X0F6dXJl/LUxvZ28ud2luZS5z/dmc',
      'Icons/postman-icon.svg',
      'Icons/intellij.svg',
      'Icons/vs-code.svg',
      'https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg',
      'https://imgs.search.brave.com/nzV-oBhs_pf499E4zJ4nB0KBeE4iH6FKgCw5Wv0eho8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9n/aXRodWIuRC00MjM5/NTI0MC5wbmc_dD0x/NzIwMjQ0NDk0',
      'https://imgs.search.brave.com/oS6Gsk_NJANFq48dTCY-MYBvtOw5oDUlec_jmcMSFM0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE5YzdjMDhmZjY0/NDFhMjk1MmRhZDMu/cG5n',
      'https://imgs.search.brave.com/RTQ6UhKU86fV_OJRLPRBxPbYVp3hqCEFvHPnHZuyH54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE2MzYwZjAzYTg3/MGI5MjBjYmZkNDEu/cG5n',
      'https://imgs.search.brave.com/qYP5rqrW4P95_Q0FUskE4Wzv4MxI1wCcy252NMaABg0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvSmly/YS1Mb2dvLVBORy1I/RC1JbWFnZS5wbmc',
      'https://imgs.search.brave.com/GHMmHmSM84vesNloJk63Nki4FrklVNjyBHxV5nw5QI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2Y5L0FwYWNoZV9M/b2c0al9Mb2dvLnBu/Zw'
    ]
  }
];

// Data for the university section
  universityData = [
    {
      location: 'Kent, OH',
      degree: 'B.S. in Computer Science',
      dates: 'Aug 2020 - May 2023',
      description: 'Graduated with a Bachelor of Science in Computer Science from Kent State University, focusing on software development and data structures.',
      gpa: '3.732',
      logoUrl: 'kent-logo.png'
    },
  ];

  certifications = [
    {
      name: 'Prompt Engineering & Programming with OpenAI',
      issuer: 'Columbia University, NY',
      issuedDate: 'Aug 2025',
      expiryDate: null,
      credentialId: '158757339',
      link: 'https://badges.plus.columbia.edu/4a210d90-c337-45ee-a60b-b9232f2f188e#acc.BuNXJIVO',
      logo: 'https://badges.plus.columbia.edu/assets/themes/badges.plus.columbia.edu/images/header_logo.png'
    },
    {
      name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
      issuer: 'Microsoft',
      issuedDate: 'Feb 2025',
      expiryDate: 'Feb 2027',
      credentialId: 'YF5035-BF95B6',
      link: 'https://learn.microsoft.com/en-us/users/tejasaibolem-5543/transcript/7xe1s66q5j4q52v',
      logo: 'https://imgs.search.brave.com/_Ttse8VJR0QYksQBhGGbEAPRI44X_WRH2xUpn6ZtYfQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tc2Z0/c3Rvcmllcy50aGVz/b3VyY2VtZWRpYWFz/c2V0cy5jb20vMjAx/NC8xMC9NU0ZUX2xv/Z29fcmdiX0MtR3Jh/eS5wbmc'
    },
    {
      name: 'SC-900: Microsoft Security, Compliance, and Identity Fundamentals with SIMS',
      issuer: 'Udemy',
      issuedDate: 'Jan 2025',
      expiryDate: null,
      credentialId: 'UC-9b47ada1-da7e-45cd-9aa5-2be424bf4f0e',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-9b47ada1-da7e-45cd-9aa5-2be424bf4f0e.pdf',
      logo: 'https://imgs.search.brave.com/EoP1vbYvIQWs9KPzYEw-QCE-c2C--ujmwZ4k437x5Nc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdo/ZHByby5jb20vd3At/Y29udGVudC90aGVt/ZXMvcG5naGRwcm8v/ZG93bmxvYWQvc29j/aWFsLW1lZGlhLWFu/ZC1icmFuZHMvdWRl/bXktbG9nby5wbmc'
    },
     {
      name: 'Introduction to Git and GitHub',
      issuer: 'Coursera',
      issuedDate: 'Jul 2021',
      expiryDate: null,
      credentialId: '5LQNWFUV6MY7',
      link: 'https://www.coursera.org/account/accomplishments/verify/5LQNWFUV6MY7',
      logo: 'https://imgs.search.brave.com/mxbvNQR54WGSrS2fAD8NFb5nubGnFK0tQ9bEKT56jB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZFRIZkw1MVAt/L3RoZW1lL2Rhcmsv/bG9nby5zdmc_Yz0x/YnhpZDY0TXVwN2Fj/emV3U0FZTVgmdD0x/NjY3NTkxMjc1NDc1'
    },
    {
      name: 'Object-Oriented Data Structures in C++',
      issuer: 'Coursera',
      issuedDate: 'Aug 2020',
      expiryDate: null,
      credentialId: 'T744LL8PGANH',
      link: 'https://www.coursera.org/account/accomplishments/verify/T744LL8PGANH',
      logo: 'https://imgs.search.brave.com/mxbvNQR54WGSrS2fAD8NFb5nubGnFK0tQ9bEKT56jB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZFRIZkw1MVAt/L3RoZW1lL2Rhcmsv/bG9nby5zdmc_Yz0x/YnhpZDY0TXVwN2Fj/emV3U0FZTVgmdD0x/NjY3NTkxMjc1NDc1'
    },
    {
      name: 'Troubleshooting and Debugging Techniques',
      issuer: 'Coursera',
      issuedDate: 'Jul 2021',
      expiryDate: null,
      credentialId: 'PQHJPYPBTKHM',
      link: 'https://www.coursera.org/account/accomplishments/certificate/PQHJPYPBTKHM',
      logo: 'https://imgs.search.brave.com/mxbvNQR54WGSrS2fAD8NFb5nubGnFK0tQ9bEKT56jB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZFRIZkw1MVAt/L3RoZW1lL2Rhcmsv/bG9nby5zdmc_Yz0x/YnhpZDY0TXVwN2Fj/emV3U0FZTVgmdD0x/NjY3NTkxMjc1NDc1'
    }
  ];
}
