import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-team',
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team {
  team = [
    {
      name: 'Professor Malcolm Hopwood MBBS, MD, MPM, FRANZCP',
      role: 'Member of clinical team',
      description:
        'President of the Asian Federation of Psychiatric Associations. Former President of the RANZCP and Head of the Department of Psychiatry, University of Melbourne.',
      image: 'team/Malcolm_Hopwood.png',
    },
    {
      name: 'Professor Soumya Basu MBBS, MD, FRANZCP',
      role: 'Member of clinical team',
      description:
        'Consultant Psychiatrist based in India and Australia. Consultant Psychiatrist at Victoria Centre of Mental Health.',
      image: 'team/Soumya_Basu.png',
    },
    {
      name: 'Dr. Kanishka Muruththutteweagama (a.k.a Dr Muruj) MBBS, MD, FRANZCP',
      role: 'Member of clinical team',
      description:
        'Senior Psychiatrist at St John of God Pinelodge Clinic with two decades of experience in adult psychiatry.',
      image: 'team/Kanishka_edited.png',
    },

    {
      name: 'Mr Harry Rosen, LL. B BA',
      role: 'Advisor',
      description:
        'Four decades of experience in corporate law and biotech commercialization.... Cofounded ASX listed three companies and three unlisted biotech companies',
      image: 'team/Mr_Harry_Rosen.png',
    },

    {
      name: 'Dr Chamin Morikawa, PhD',
      role: 'Advisor',
      description:
        'Two decades of industry experience in vision AI.... Past research associate at HP Labs Japan.... Past an assistant professor at the Uni of Tokyo',
      image: 'team/Chamin_Morikawa.png',
    },

    {
      name: 'Ms Kerryn Burke, BA',
      role: 'Advisor',
      description:
        'An award-winning senior marketer in medical marketing and communications.... 20 years of experience managing marketing programs across the Asia Pacific regions',
      image: 'team/Kerryn_Burke.png',
    },

    {
      name: 'Professor (retired) Rao Kotagiri IEAus Fellow, ACM Life member',
      role: 'Advisor',
      description:
        'An award-winning senior marketer in medical marketing and communications... 20 years of experience managing marketing programs across the Asia Pacific regions',
      image: 'team/Raos.png',
    },

    {
      name: 'Professor Shanika Karunasekera, The School of Computing and Information Systems, University of Melbourne',
      role: 'Collaborator',
      description:
        'Four decades of R&D experience in AI, big data and multimedia systems.... Won $50MM in research grants... Cofounded the Victoria National Information and Communication Technologies Australia (NICTA).... Invented and commercialised technologies valued at over $100MM.... Graduated 60 PhD students',
      image: 'team/Shanika.png',
    },

    {
      name: 'Dr. Namunu Maddage, PhD, MBA',
      role: 'Founder',
      description:
        'Two decades of R&D experience in AI-based medical devices.... Trained in Australia, Singapore, India, and Sri Lanka.... Myer Innovation Fellow and a technopreneur.... The previous venture was an online game-based brain training app',
      image: 'team/Namunu.png',
    },



  ]
role: any;
  
  }
