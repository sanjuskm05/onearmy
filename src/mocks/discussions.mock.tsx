import {
  IDiscussionQuestion,
  IDiscussionComment,
} from 'src/models/discussions.models'

/*
  This file exports DISCUSSION_QUESTIONS_MOCK and DISCUSSION_COMMENTS_MOCK
*/

// mocks generated from template, note the Date fields are populated as string so require reformatting
export const DISCUSSION_QUESTION_MOCKS: IDiscussionQuestion[] = [
  {
    _id: '5c6d7a294475199744afe2d1',
    _created: new Date('Tuesday, February 14, 2017 1:33 PM'),
    _modified: new Date('Monday, August 7, 2017 5:43 AM'),
    _lastResponse: new Date('Saturday, August 27, 2016 6:54 AM'),
    _commentCount: 5,
    _viewCount: 6231,
    _usefullCount: 2,
    _last3Comments: [
      'http://i.pravatar.cc/200',
      'http://i.pravatar.cc/201',
      'http://i.pravatar.cc/202',
    ],
    createdBy: 'http://i.pravatar.cc/203',
    isClosed: false,
    tags: ['non', 'nulla', 'nostrud', 'incididunt', 'occaecat'],
    title:
      'Nulla incididunt excepteur pariatur sit labore ipsum consequat aute adipisicing.',
    content:
      'Eiusmod culpa aliqua dolore pariatur id id fugiat veniam fugiat ullamco. Cupidatat minim minim ut ut cupidatat nisi adipisicing dolore consequat reprehenderit irure veniam. Consequat officia amet nulla voluptate aliqua proident et enim minim. Cupidatat ea anim exercitation amet. Pariatur cupidatat fugiat id excepteur ipsum sint enim dolor. Proident est mollit aliqua et enim officia tempor voluptate.',
    type: 'discussionQuestion',
  },
  {
    _id: '5c6d7a292ca7a215c97237ff',
    _created: new Date('Sunday, December 17, 2017 1:23 PM'),
    _modified: new Date('Wednesday, May 28, 2014 8:53 PM'),
    _lastResponse: new Date('Wednesday, July 4, 2018 5:51 PM'),
    _commentCount: 2,
    _viewCount: 16211,
    _usefullCount: 4,
    _last3Comments: [
      'http://i.pravatar.cc/204',
      'http://i.pravatar.cc/205',
      'http://i.pravatar.cc/206',
    ],
    createdBy: 'http://i.pravatar.cc/207',
    isClosed: false,
    tags: ['ullamco', 'velit', 'anim', 'aliqua', 'deserunt'],
    title:
      'Ad ut esse ex laboris tempor tempor aliquip in id aliqua non reprehenderit.',
    content:
      'Eiusmod anim voluptate exercitation incididunt laborum. Irure ad nulla voluptate anim cillum. Amet ad mollit non velit tempor adipisicing aliquip. Excepteur ea occaecat pariatur aliquip voluptate nisi esse reprehenderit aliqua. Nostrud Lorem id do laborum officia sit. Do Lorem pariatur non enim sint quis.',
    type: 'discussionQuestion',
  },
  {
    _id: '5c6d7a29755aaf19aa3821ca',
    _created: new Date('Wednesday, March 9, 2016 6:56 PM'),
    _modified: new Date('Tuesday, May 1, 2018 12:33 AM'),
    _lastResponse: new Date('Saturday, December 23, 2017 3:40 PM'),
    _commentCount: 22,
    _viewCount: 7810,
    _usefullCount: 4,
    _last3Comments: [
      'http://i.pravatar.cc/208',
      'http://i.pravatar.cc/209',
      'http://i.pravatar.cc/210',
    ],
    createdBy: 'http://i.pravatar.cc/220',
    isClosed: true,
    tags: ['consectetur', 'veniam', 'ut', 'ipsum', 'veniam'],
    title: 'Ut ad eu minim ullamco id occaecat tempor.',
    content:
      'Aliquip quis occaecat cillum labore adipisicing aliqua eiusmod. Consectetur quis nisi cillum labore nostrud sint amet nulla officia. Occaecat occaecat anim cillum veniam.',
    type: 'discussionQuestion',
  },
  {
    _id: '5c6d7a295bbae94e85259607',
    _created: new Date('Wednesday, October 15, 2014 7:33 AM'),
    _modified: new Date('Friday, January 2, 2015 12:59 AM'),
    _lastResponse: new Date('Wednesday, November 26, 2014 9:57 AM'),
    _commentCount: 0,
    _viewCount: 1318,
    _usefullCount: 1,
    _last3Comments: [
      'http://i.pravatar.cc/230',
      'http://i.pravatar.cc/240',
      'http://i.pravatar.cc/250',
    ],
    createdBy: 'http://i.pravatar.cc/260',
    isClosed: false,
    tags: ['excepteur', 'proident', 'adipisicing', 'irure', 'aliquip'],
    title: 'Duis non incididunt commodo duis aliqua elit.',
    content:
      'Nulla mollit consequat eu laboris ad dolor Lorem do in non. Sunt consequat nostrud enim et duis minim duis commodo laborum. Minim eu ad Lorem velit amet amet reprehenderit labore sit magna tempor. Ea ex ea amet laborum cupidatat.',
    type: 'discussionQuestion',
  },
  {
    _id: '5c6d7a2956736681732af496',
    _created: new Date('Thursday, December 10, 2015 7:30 AM'),
    _modified: new Date('Sunday, December 7, 2014 8:02 PM'),
    _lastResponse: new Date('Saturday, May 31, 2014 4:52 AM'),
    _commentCount: 1,
    _viewCount: 20422,
    _usefullCount: 2,
    _last3Comments: [
      'http://i.pravatar.cc/270',
      'http://i.pravatar.cc/280',
      'http://i.pravatar.cc/290',
    ],
    createdBy: 'http://i.pravatar.cc/211',
    isClosed: false,
    tags: ['deserunt', 'minim', 'aliquip', 'laborum', 'tempor'],
    title: 'Commodo ullamco sit quis ex.',
    content:
      'Esse enim non id pariatur amet exercitation est excepteur cupidatat eiusmod. Eu duis laborum magna officia enim pariatur non sint cillum pariatur cupidatat qui laborum adipisicing. Proident incididunt exercitation excepteur cillum dolore enim aliqua Lorem reprehenderit fugiat sint pariatur fugiat nostrud. Commodo eu eiusmod adipisicing ea deserunt qui fugiat laboris non.',
    type: 'discussionQuestion',
  },
  {
    _id: '5c6d7a29c46abd230bbeb32f',
    _created: new Date('Monday, February 10, 2014 9:42 PM'),
    _modified: new Date('Friday, September 9, 2016 7:35 AM'),
    _lastResponse: new Date('Sunday, September 6, 2015 11:28 PM'),
    _commentCount: 24,
    _viewCount: 1387,
    _usefullCount: 6,
    _last3Comments: [
      'http://i.pravatar.cc/222',
      'http://i.pravatar.cc/233',
      'http://i.pravatar.cc/244',
    ],
    createdBy: 'http://i.pravatar.cc/255',
    isClosed: true,
    tags: ['velit', 'proident', 'nisi', 'laborum', 'minim'],
    title:
      'Nostrud aliqua sunt amet veniam enim quis quis incididunt sunt sit eiusmod sit.',
    content:
      'Elit ea Lorem aliquip ea ut occaecat veniam incididunt sunt veniam cillum. Excepteur Lorem adipisicing culpa deserunt qui enim. Nisi veniam sit pariatur ut pariatur. Officia do consequat enim eiusmod id nisi irure adipisicing ipsum sint labore duis. Exercitation mollit excepteur elit reprehenderit esse officia nisi eu.',
    type: 'discussionQuestion',
  },
  {
    _id: '5c6d7a2928acc4726f1b7780',
    _created: new Date('Monday, December 10, 2018 8:15 PM'),
    _modified: new Date('Tuesday, September 16, 2014 10:37 PM'),
    _lastResponse: new Date('Tuesday, September 1, 2015 2:40 AM'),
    _commentCount: 4,
    _viewCount: 10149,
    _usefullCount: 3,
    _last3Comments: [
      'http://i.pravatar.cc/266',
      'http://i.pravatar.cc/277',
      'http://i.pravatar.cc/288',
    ],
    createdBy: 'http://i.pravatar.cc/299',
    isClosed: false,
    tags: ['laborum', 'esse', 'quis', 'pariatur', 'quis'],
    title:
      'Ut qui magna ipsum duis incididunt voluptate dolor magna deserunt sint veniam laborum dolore.',
    content:
      'Tempor officia amet mollit excepteur excepteur enim aliqua exercitation tempor non. Deserunt qui non consectetur laborum proident reprehenderit laborum. Fugiat aliquip reprehenderit duis officia nisi ad et.',
    type: 'discussionQuestion',
  },
  {
    _id: '5c6d7a297fee346b98283041',
    _created: new Date('Monday, July 9, 2018 5:13 PM'),
    _modified: new Date('Sunday, January 17, 2016 3:46 PM'),
    _lastResponse: new Date('Tuesday, December 2, 2014 10:48 AM'),
    _commentCount: 16,
    _viewCount: 24936,
    _usefullCount: 5,
    _last3Comments: [
      'http://i.pravatar.cc/212',
      'http://i.pravatar.cc/223',
      'http://i.pravatar.cc/234',
    ],
    createdBy: 'http://i.pravatar.cc/245',
    isClosed: true,
    tags: ['eu', 'nisi', 'ullamco', 'labore', 'id'],
    title:
      'Proident ad aliquip aliqua excepteur est cupidatat minim sint officia.',
    content:
      'Amet deserunt laborum mollit occaecat veniam ad consequat. Elit ipsum nisi in id veniam. Sint tempor anim eiusmod est amet ullamco proident.',
    type: 'discussionQuestion',
  },
  {
    _id: '5c6d7a299f70798b222a3b1f',
    _created: new Date('Wednesday, July 26, 2017 4:49 PM'),
    _modified: new Date('Sunday, April 15, 2018 8:27 AM'),
    _lastResponse: new Date('Tuesday, March 10, 2015 8:06 AM'),
    _commentCount: 11,
    _viewCount: 23933,
    _usefullCount: 0,
    _last3Comments: [
      'http://i.pravatar.cc/256',
      'http://i.pravatar.cc/267',
      'http://i.pravatar.cc/278',
    ],
    createdBy: 'http://i.pravatar.cc/289',
    isClosed: false,
    tags: ['fugiat', 'labore', 'non', 'consectetur', 'qui'],
    title:
      'Proident laborum qui laborum labore aute adipisicing dolor incididunt cillum.',
    content:
      'Elit elit duis fugiat et Lorem aliqua. Voluptate cupidatat incididunt anim officia duis. Cupidatat voluptate et voluptate magna velit labore adipisicing aliquip pariatur duis eu cillum irure. Laborum proident qui tempor ex anim aliquip velit et quis. Irure aliquip consequat minim officia laboris labore ea culpa esse incididunt ipsum. Veniam pariatur labore labore nulla aliquip adipisicing laborum dolore dolor amet sunt nulla ut elit.',
    type: 'discussionQuestion',
  },
]

export const DISCUSSION_COMMENT_MOCKS: IDiscussionComment[] = [
  {
    _id: '5c6dad39f669db9d335153d2',
    _discussionID: '5c6d7a294475199744afe2d1',
    _created: new Date('Thursday, July 13, 2017 2:40 AM'),
    _modified: new Date('Wednesday, December 5, 2018 6:55 AM'),
    replies: [],
    repliesTo: '',
    comment:
      'Id cupidatat occaecat est veniam laboris velit id qui nostrud. In veniam voluptate ea excepteur quis est velit in nisi in ex qui. Ad esse cupidatat voluptate anim nulla mollit. Sunt nostrud aliqua id consectetur ut in culpa dolor exercitation velit nulla commodo aliqua. Duis id commodo in aute deserunt ullamco laboris.',
    type: 'discussionComment',
  },
  {
    _id: '5c6dad39134eaab99e1f56cb',
    _discussionID: '5c6d7a294475199744afe2d1',
    _created: new Date('Sunday, October 1, 2017 8:14 PM'),
    _modified: new Date('Thursday, August 17, 2017 12:37 AM'),
    replies: [
      {
        _id: '5c6dadd6efb4c060265a127a',
        _discussionID: '5c6d7a294475199744afe2d1',
        _created: new Date('Friday, October 28, 2016 6:52 PM'),
        _modified: new Date('Tuesday, September 1, 2015 2:52 PM'),
        replies: [
          {
            _id: '5c6dae0e66a1d753e4f71312',
            _discussionID: '5c6d7a294475199744afe2d1',
            _created: new Date('Wednesday, December 27, 2017 5:34 AM'),
            _modified: new Date('Saturday, January 20, 2018 2:14 AM'),
            replies: [],
            repliesTo: '5c6dadd6efb4c060265a127a',
            comment:
              'Cupidatat pariatur id nisi est ea eu est. Ipsum aliquip magna dolore ad minim elit officia qui cupidatat pariatur occaecat esse culpa. Et do irure enim magna officia dolor excepteur eiusmod nisi adipisicing.',
            type: 'discussionComment',
          },
        ],
        repliesTo: '5c6dad39134eaab99e1f56cb',
        comment:
          'Est consectetur tempor excepteur ea mollit voluptate fugiat sunt tempor sint ea pariatur. Duis nostrud incididunt irure tempor reprehenderit officia. Nisi laboris ipsum id enim et Lorem reprehenderit minim consequat laborum. Qui minim eiusmod id officia do Lorem irure eiusmod aliquip proident quis ea ut. Voluptate esse magna commodo est ea aute dolore. Reprehenderit consectetur laborum consequat dolor non dolore ullamco. Aliqua sint anim quis exercitation dolor sint pariatur cupidatat dolore.',
        type: 'discussionComment',
      },
    ],
    repliesTo: '',
    comment:
      'Irure irure irure sint exercitation qui incididunt eu id irure cillum. Nulla nisi mollit elit culpa magna consectetur eu ullamco proident est enim. Occaecat nisi ad eu ut veniam occaecat non eiusmod. Fugiat sint velit pariatur sunt esse nisi reprehenderit ipsum culpa duis irure dolore ullamco ut.',
    type: 'discussionComment',
  },
  {
    _id: '5c6dad39b88053eec7edf6ba',
    _discussionID: '5c6d7a294475199744afe2d1',
    _created: new Date('Friday, April 14, 2017 7:50 PM'),
    _modified: new Date('Saturday, December 1, 2018 1:50 AM'),
    replies: [],
    repliesTo: '',
    comment:
      'Aliqua dolore mollit anim ex elit dolor tempor officia culpa ad. Laboris irure ullamco eiusmod Lorem occaecat amet veniam irure proident nulla excepteur ipsum ex. Cillum eiusmod voluptate pariatur id reprehenderit cillum adipisicing dolore magna id exercitation veniam deserunt dolore. Id laboris consequat tempor elit id ullamco et consectetur non id Lorem amet id. Occaecat eiusmod sunt proident culpa aliqua quis pariatur occaecat fugiat enim sint reprehenderit officia est.',
    type: 'discussionComment',
  },
]

/* TEMPLATES USED TO GENERAGE */

// Code used to generate on json-generator.com, modified on import
const questionsTemplate = [
  {
    'repeat(5, 10)': {
      _id: '{{objectId()}}',
      _created:
        '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
      _modified:
        '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
      _lastResponse:
        '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
      _commentCount: '{{integer(0, 25)}}',
      _viewCount: '{{integer(1, 25000)}}',
      _usefullCount: '{{integer(0, 6)}}',
      _last3Comments: [{ 'repeat(3)': 'http://i.pravatar.cc/200' }],
      createdBy: 'http://i.pravatar.cc/200',
      isClosed: '{{bool()}}',
      tags: [
        {
          'repeat(5)': '{{lorem(1, "words")}}',
        },
      ],
      title: '{{lorem(1, "sentences")}}',
      content: '{{lorem(1,"paragraphs")}}',
      type: 'discussionQuestion',
    },
  },
]

const commentsTemplate = [
  {
    'repeat(3)': {
      _id: '{{objectId()}}',
      _discussionID: '{{objectID}}',
      _created:
        '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
      _modified:
        '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
      replies: [],
      repliesTo: '',
      comment: '{{lorem(1,"paragraphs")}}',
      type: 'discussionComment',
    },
  },
]
