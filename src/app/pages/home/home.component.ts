import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  sampleItems: Array<any> = [
    {
      title: 'The Reading Method',
      description: 'How could you ever take 20 minutes to just breathe?',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: 'https://bit.ly/2OVCypl',
      imagem: 'https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-watercolor-library-book-clip-art-png-image_10285452.png'
    },
    {
      title: 'What Meditation Isn’t',
      description: 'Meditating won’t solve your problems — but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: 'https://bit.ly/2UercLM',
      imagem: 'https://inkandvolt.com/cdn/shop/files/penguin-book-miraclemorning-feature.png?v=1701413938'
    },
    {
      title: 'Get out of your mental cocoon',
      description: 'You Can’t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781408886991.jpg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }
 
}
