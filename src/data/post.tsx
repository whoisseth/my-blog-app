/** @format */

import { UserInterface } from "@/store/userStore";

export interface commentInterface {
  id: string | number;
  user: UserInterface;
  comment: string;
}

export interface PostInterface {
  id: string;
  title: string;
  content: string;
  previewImage: string;
  author: {
    userName: string;
    role: "author" | "admin";
  };
  comments?: commentInterface[];
  // image?: File;
}

export const posts: PostInterface[] = [
  {
    id: "1",
    title: "My first blog post",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, felis vel tempus malesuada, risus elit pharetra enim, ut euismod nulla nisl in lectus.",
    previewImage: "",

    author: {
      userName: "Rajesh Singh",
      role: "admin"
    },

    comments: [
      {
        id: "1",
        user: { role: "reader", userName: "Nisha Verma " },
        comment: "This is a comment two"
      }
    ]
  },
  {
    id: "2",
    title: "My second blog post",
    previewImage: "",
    author: {
      userName: "Arjun Gupta",
      role: "author"
    },
    comments: [
      {
        id: "1",
        user: { role: "reader", userName: "Nisha Verma " },
        comment: "This is a comment Three"
      }
    ],

    content:
      "Suspendisse potenti. Praesent euismod congue ex, vel ullamcorper nulla accumsan ut. In dapibus ante eu ex consequat, vel mollis est imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam feugiat sodales ex a pharetra."
  },
  {
    id: "3",
    title: "My third blog post",
    previewImage: "",
    comments: [
      {
        id: 1,
        user: { role: "reader", userName: "Nisha Verma " },
        comment: "This is a comment by Nisha Verma"
      }
    ],
    content:
      "Curabitur eget interdum enim. Integer euismod magna ac urna imperdiet, vitae fermentum ex sagittis. Nam tristique urna in lorem suscipit, vel venenatis sapien ultrices. Integer id leo vel odio vulputate commodo non ac dolor.",
    author: {
      userName: "Kavya Sharma",
      role: "author"
    }
  }
];

export const posts2 = [
  {
    id: "1",
    title: "My first blog post",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, felis vel tempus malesuada, risus elit pharetra enim, ut euismod nulla nisl in lectus."
  },
  {
    id: "2",
    title: "My second blog post",
    content:
      "Suspendisse potenti. Praesent euismod congue ex, vel ullamcorper nulla accumsan ut. In dapibus ante eu ex consequat, vel mollis est imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam feugiat sodales ex a pharetra."
  },
  {
    id: "3",
    title: "My third blog post",
    content:
      "Curabitur eget interdum enim. Integer euismod magna ac urna imperdiet, vitae fermentum ex sagittis. Nam tristique urna in lorem suscipit, vel venenatis sapien ultrices. Integer id leo vel odio vulputate commodo non ac dolor."
  },
  {
    id: "4",
    title: "My fourth blog post",
    content:
      "Vivamus venenatis gravida velit, non rhoncus est interdum vitae. Nullam posuere varius velit, ac laoreet enim ullamcorper sed. Duis vel risus ut enim varius dignissim. Suspendisse suscipit vel purus vel vehicula."
  },
  {
    id: "5",
    title: "My fifth blog post",
    content:
      "Praesent eu nisi eros. Nulla eget ante nec ante vestibulum cursus. Pellentesque id urna at purus vehicula dignissim. Suspendisse sagittis ante vitae eros pharetra luctus. Morbi condimentum sapien ac nulla gravida, ut tristique nulla maximus. "
  },
  {
    id: "6",
    title: "My sixth blog post",
    content:
      "Donec euismod interdum ipsum vel tincidunt. Mauris auctor risus vel justo bibendum, ut dictum lacus accumsan. Curabitur nec nunc dolor. Fusce ac urna in magna auctor placerat eu quis elit."
  },
  {
    id: "7",
    title: "My seventh blog post",
    content:
      "Sed quis urna et quam porttitor sollicitudin eu eget odio. In interdum urna sed velit bibendum, eu suscipit tellus feugiat. Nam eu dui nec metus bibendum auctor ac eu metus."
  },
  {
    id: "8",
    title: "My eighth blog post",
    content:
      "Phasellus malesuada arcu ac erat volutpat, in blandit nunc efficitur. Sed non turpis vel nisl pellentesque luctus. Ut bibendum eleifend ligula, vel sodales purus maximus ac."
  },
  {
    id: "9",
    title: "My first blog post",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, felis vel tempus malesuada, risus elit pharetra enim, ut euismod nulla nisl in lectus."
  },
  {
    id: "10",
    title: "My second blog post",
    content:
      "Suspendisse potenti. Praesent euismod congue ex, vel ullamcorper nulla accumsan ut. In dapibus ante eu ex consequat, vel mollis est imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam feugiat sodales ex a pharetra."
  },
  {
    id: "11",
    title: "My third blog post",
    content:
      "Curabitur eget interdum enim. Integer euismod magna ac urna imperdiet, vitae fermentum ex sagittis. Nam tristique urna in lorem suscipit, vel venenatis sapien ultrices. Integer id leo vel odio vulputate commodo non ac dolor."
  },
  {
    id: "12",
    title: "My fourth blog post",
    content:
      "Vivamus venenatis gravida velit, non rhoncus est interdum vitae. Nullam posuere varius velit, ac laoreet enim ullamcorper sed. Duis vel risus ut enim varius dignissim. Suspendisse suscipit vel purus vel vehicula."
  },
  {
    id: "13",
    title: "My fifth blog post",
    content:
      "Praesent eu nisi eros. Nulla eget ante nec ante vestibulum cursus. Pellentesque id urna at purus vehicula dignissim. Suspendisse sagittis ante vitae eros pharetra luctus. Morbi condimentum sapien ac nulla gravida, ut tristique nulla maximus. "
  },
  {
    id: "14",
    title: "My sixth blog post",
    content:
      "Donec euismod interdum ipsum vel tincidunt. Mauris auctor risus vel justo bibendum, ut dictum lacus accumsan. Curabitur nec nunc dolor. Fusce ac urna in magna auctor placerat eu quis elit."
  },
  {
    id: "15",
    title: "My seventh blog post",
    content:
      "Sed quis urna et quam porttitor sollicitudin eu eget odio. In interdum urna sed velit bibendum, eu suscipit tellus feugiat. Nam eu dui nec metus bibendum auctor ac eu metus."
  },
  {
    id: "16",
    title: "My eighth blog post",
    content:
      "Phasellus malesuada arcu ac erat volutpat, in blandit nunc efficitur. Sed non turpis vel nisl pellentesque luctus. Ut bibendum eleifend ligula, vel sodales purus maximus ac."
  },
  {
    id: "17",
    title: "My fifth blog post",
    content:
      "Praesent eu nisi eros. Nulla eget ante nec ante vestibulum cursus. Pellentesque id urna at purus vehicula dignissim. Suspendisse sagittis ante vitae eros pharetra luctus. Morbi condimentum sapien ac nulla gravida, ut tristique nulla maximus. "
  },
  {
    id: "18",
    title: "My sixth blog post",
    content:
      "Donec euismod interdum ipsum vel tincidunt. Mauris auctor risus vel justo bibendum, ut dictum lacus accumsan. Curabitur nec nunc dolor. Fusce ac urna in magna auctor placerat eu quis elit."
  },
  {
    id: "19",
    title: "My seventh blog post",
    content:
      "Sed quis urna et quam porttitor sollicitudin eu eget odio. In interdum urna sed velit bibendum, eu suscipit tellus feugiat. Nam eu dui nec metus bibendum auctor ac eu metus."
  },
  {
    id: "20",
    title: "My eighth blog post",
    content:
      "Phasellus malesuada arcu ac erat volutpat, in blandit nunc efficitur. Sed non turpis vel nisl pellentesque luctus. Ut bibendum eleifend ligula, vel sodales purus maximus ac."
  }
];
