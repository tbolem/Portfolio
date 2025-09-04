import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
      description: 'Graduated with a Bachelor of Science in Computer Science from Kent State University, focusing on software development and data structures.',
      gpa: '3.732',
      logoUrl: 'kent-logo.png'
    },
  ];

   @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  certifications = [
    {
      name: 'Prompt Engineering & Programming with OpenAI',
      issuer: 'Columbia+',
      issuedDate: 'Aug 2025',
      credentialId: '158757339',
      link: 'https://example.com', // replace with real link
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Columbia_University_Logo.svg'
    },
    {
      name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
      issuer: 'Microsoft',
      issuedDate: 'Feb 2025',
      expiryDate: 'Feb 2027',
      credentialId: 'YF5035-BF95B6',
      link: 'https://learn.microsoft.com', // replace
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
    },
    {
      name: 'SC-900: Microsoft Security, Compliance, & Identity with SIMS',
      issuer: 'Udemy',
      issuedDate: 'Jan 2025',
      credentialId: 'UC-9b47ada1-da7e-45cd-9aa5-2be424bf4f0e.pdf',
      link: 'https://udemy.com/certificate', // replace
      logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
    },
    {
      name: 'Introduction to Git and GitHub',
      issuer: 'Coursera',
      issuedDate: 'Jul 2021',
      credentialId: '5LQNWFUV6MY7',
      link: 'https://coursera.org', // replace
      logo: 'https://about.coursera.org/static/partners/images/logos/coursera-logo.svg'
    },
    {
      name: 'Object-Oriented Data Structures in C++',
      issuer: 'Coursera (University of Illinois)',
      issuedDate: 'Aug 2020',
      credentialId: 'T744LL8PGANH',
      link: 'https://coursera.org', // replace
      logo: 'https://about.coursera.org/static/partners/images/logos/coursera-logo.svg'
    },
    {
      name: 'Troubleshooting and Debugging Techniques',
      issuer: 'Coursera',
      issuedDate: 'No date provided',
      credentialId: 'PQHJPYPBTKHM',
      link: 'https://coursera.org', // replace
      logo: 'https://about.coursera.org/static/partners/images/logos/coursera-logo.svg'
    }
  ];

  index = 0;
  cardWidth = 0;
  visibleCards = 0;
  maxIndex = 0;

  ngAfterViewInit() {
    this.calculateSizes();
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateSizes();
    
  }

  private calculateSizes() {
    const container = this.carouselTrack.nativeElement.parentElement as HTMLElement;
    const firstCard = this.carouselTrack.nativeElement.querySelector('.card') as HTMLElement;

    if (firstCard) {
      this.cardWidth = firstCard.offsetWidth + 20; // account for margin
      this.visibleCards = Math.floor(container.offsetWidth / this.cardWidth);
      this.maxIndex = this.certifications.length - this.visibleCards;
      if (this.index > this.maxIndex) this.index = this.maxIndex;
      this.updateCarousel();
    }
  }

  moveCarousel(direction: number) {
    this.index += direction;
    if (this.index < 0) this.index = 0;
    if (this.index > this.maxIndex) this.index = this.maxIndex;
    this.updateCarousel();
  }

  private updateCarousel() {
    this.carouselTrack.nativeElement.style.transform = `translateX(${-this.index * this.cardWidth}px)`;
  }
}
