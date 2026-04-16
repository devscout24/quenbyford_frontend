export interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string;
  jobsUrl: string;
  description: string;
  bio: {
    name: string;
    image: string;
    role: string;
    text: string;
  };
  aboutTitle: string;
  aboutDescs: string[];
}
