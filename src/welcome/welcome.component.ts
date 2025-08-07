import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
      'Icons/backend/spring.png',
      'Icons/backend/maven.svg',
      'Icons/backend/microservices.png',
      'Icons/backend/rest-api-icon.svg',
    ]
  },
  {
    category: 'Database',
    icon: 'Skills/database.png',
    icons: [
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
      'https://imgs.search.brave.com/XBU8ukj1zPwD-yIu_S3popcI2VFcZR5BB_k4utJDAwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZHBu/Zy5jb20vaW1hZ2Vz/L2Jvb3RzdHJhcC1s/b2dvLXBuZy1vcGVu/LTIwMDAucG5n',
      'https://imgs.search.brave.com/3BFATtMXY46M1mm5r7MaGJLpnPXupw2IZVVHHk8ZGRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cG5nZ2FsbGVyeS5j/b20vd3AtY29udGVu/dC91cGxvYWRzL2h0/bWwtbG9nby0wMi5w/bmc',
      'https://imgs.search.brave.com/lV43XijqCcOIf8S72xipUZS3OJGx_YX_NGNOpBoXKH4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvY3Nz/My1sb2dvLXBuZy10/cmFuc3BhcmVudC5w/bmc',
      'https://imgs.search.brave.com/MBa2DUYxfNmPfckU4KfOP1mui9pBWQggsglZZ8wDeSw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2phdmFzY3JpcHQt/cG5nL2phdmFzY3Jp/cHQtdmVjdG9yLWxv/Z28teWVsbG93LXBu/Zy10cmFuc3BhcmVu/dC1qYXZhc2NyaXB0/LXZlY3Rvci0xMi5w/bmc'
    ]
  },
  {
    category: 'Tools',
    icon: 'Skills/tools.png',
    icons: [
      'Icons/postman-icon.svg',
      'Icons/intellij.svg',
      'Icons/vs-code.svg',
      'https://imgs.search.brave.com/nzV-oBhs_pf499E4zJ4nB0KBeE4iH6FKgCw5Wv0eho8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9n/aXRodWIuRC00MjM5/NTI0MC5wbmc_dD0x/NzIwMjQ0NDk0',
      'https://imgs.search.brave.com/oS6Gsk_NJANFq48dTCY-MYBvtOw5oDUlec_jmcMSFM0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE5YzdjMDhmZjY0/NDFhMjk1MmRhZDMu/cG5n',
      'https://imgs.search.brave.com/RTQ6UhKU86fV_OJRLPRBxPbYVp3hqCEFvHPnHZuyH54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE2MzYwZjAzYTg3/MGI5MjBjYmZkNDEu/cG5n',
    ]
  }
];

// Data for the university section
  universityData = [
    {
      location: 'Kent, OH',
      degree: 'B.S. in Computer Science',
      dates: 'Aug 2020 - May 2023',
      logoUrl: 'kent-logo.png'
    },
  ];
}
