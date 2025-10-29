import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-testimonals',
  imports: [ CommonModule,MatCardModule, MatGridListModule],
  templateUrl: './testimonals.html',
  styleUrl: './testimonals.scss'
})
export class Testimonals 
{testimonials = [
  {
    name: 'Ms Ting Sun',
    role: 'Full Time MBA class of 2020, Melbourne Business School (MBS)',
    imagepath: 'testimonial/Ting_Sun.png',
    text: '"During my internship at NeuroCo from June to August 2020, I conducted an assessment of the market feasibility for NeuroCo products. Opting for an internship at NeuroCo was driven by my profound interest in the company s digital products and medical devices aimed at managing psychiatric disorders, particularly depression. NeuroCos products hold the potential to bring substantial benefits to individuals and society at large. I hold deep admiration for the entrepreneurial spirit and resilience exhibited by the NeuroCo team, with special recognition for Dr. Namunu. Their impressive expertise and unwavering determination in the face of challenges are truly commendable. I eagerly await the forthcoming mature product launch from NeuroCo. I extend my gratitude to both Melbourne Business School and NeuroCo for affording me the opportunity to enhance my business skills within the realm of Digital Health products."'
  },

   {
     name: 'Mr Russell Kunz',
     role: 'Full Time MBA class of 2020, Melbourne Business School (MBS)',
     imagepath: 'testimonial/Russell_Kunz.jpg',
     text: '"In 2020, I embarked on an internship project at NeuroCo, where I assessed early-stage market entry options for the company. This endeavour involved thorough research and analysis across both conventional and alternative markets for their health tech products. Despite grappling with the intricate healthcare landscape, guidance from Dr. Nammunu Maddage and collaboration with fellow interns expedited our understanding of Australian healthcare and health technology markets. Armed with this knowledge and a deep grasp of NeuroCos value propositions, we swiftly generated actionable insights. Embracing ambiguity aligns with the ethos of the MBA, and Melbourne Business School connected me with Dr. Maddage, facilitating this valuable opportunity to refine my MBA skillset. I extend my gratitude to both parties. NeuroCos future brims with excitement, and I eagerly anticipate its unfolding!"'
   },

   {
     name: 'Ms Tamara Cherrington',
    role: 'Full Time MBA class of 2020, Melbourne Business School (MBS)',
    imagepath: 'testimonial/Tamara_Cherrington.jpg',
    text: '"In 2020, I engaged in a 3-month internship at NeuroCo, tasked with conducting comprehensive market research and analysis for NeuroCos products within Australia. This internship provided invaluable insights into Australias healthcare landscape, particularly its mental health treatment sector and the burgeoning digital healthcare arena. Applying fundamental strategic principles from my MBA to real-world scenarios was an enriching experience. Throughout this journey, Dr. Namunu Maddage stood as a supportive and inspiring mentor, sharing industry wisdom while also igniting our enthusiasm for ethical healthcare practices. Im genuinely appreciative of this opportunity and eagerly anticipate NeuroCos growth and the positive transformative impact its poised to bring to the field of mental health diagnosis in Australia.."'
  },

  {
   name: 'Mr David Tan',
   role: 'Associate Director of Client & Career Development, Melbourne Business School (MBS)',
   imagepath: 'testimonial/David_Tan_MBS.jpg',
   text: '"Dr. Namunu Maddage holds an esteemed status as an alumnus of Melbourne Business School. In his capacity as the Founder of NeuroCo, he has consistently extended opportunities for MBA students to partake in internships and project undertakings. For MBA students striving to navigate career transitions, the acquisition of diverse experiences is pivotal. This not only enables the testing and validation of their acquired knowledge but also facilitates the contribution of tangible value by addressing real-world business complexities. MBS is committed to nurturing well-rounded, adaptable, and astute MBA graduates. The contributions of alumni such as Namunu play a pivotal role in furnishing students with the skills, knowledge, and acumen necessary to tackle the most pressing challenges of our time."'
 },

 {
  name: 'Prof. Pradeep K. Atrey',
  role: 'Undergraduate Program Director, Department of Computer Science, University at Albany, State University of New York',
  imagepath: 'testimonial/Pk_Atrey.jpg',
  text: '"Since 2020, NeuroCo in Australia has stood as a deeply appreciated industry collaborator in a range of student projects within the Department of Computer Science at the University at Albany, State University of New York. I extend my heartfelt gratitude to Dr. Namunu Maddage, the CEO, and the entire NeuroCo team for their commitment in affording our students invaluable hands-on experiences in the realm of digital health technologies."'
},
  

];
}


