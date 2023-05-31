import React, { useState } from "react";
import Crard from "./Card";
import CBT from "@images/CBT.jpg";
import Im2 from "@images/36999_hd.jpg";
import HumanmindUnderstad from "@images/HumanmindUnderstad.jpg";
import TheRoleofResilience from "@images/The Role of Resilience in Overcoming Adversity.jpg";
import UnlockingtheSecretsofSelfCompassion from "@images/Unlocking the Secrets of Self-Compassion.jpeg";
import { StaticImageData } from "next/image";
import ThePowerOfPosThink from "@images/The Power of Positive Thinking.jpg";

export type ArticleType = {
  title: string;
  subTitle: string;
  createdAt: string;
  authors: string;
  image: StaticImageData;
  gender: string[];
  type: string[];
  link?: string;
};

const Index = () => {
  const [articles] = useState<ArticleType[]>([
    {
      title: "Understanding the Human Mind",
      subTitle: "Exploring the depths of psychology",
      createdAt: "2016-08-03",
      authors: "Linda B. Glaser",
      image: HumanmindUnderstad,
      gender: ["male"],
      type: ["psychology"],
      link: "https://psychology.cornell.edu/news/understanding-mind",
    },
    {
      title: "The Power of Positive Thinking",
      subTitle: "Harnessing optimism for mental well-being",
      createdAt: "2023-05-05",
      authors: "Dr. Norman Vincent Peale",
      image: ThePowerOfPosThink,
      gender: ["female"],
      type: ["psychology"],
      link: "https://www.simonandschuster.com/books/The-Power-of-Positive-Thinking/Dr-Norman-Vincent-Peale/9780743234801",
    },
    {
      title: "Cognitive Behavioral Therapy: A Practical Guide",
      subTitle: "Applying CBT techniques in everyday life",
      createdAt: "2023-05-10",
      authors: "Michael Davis",
      image: CBT,
      gender: ["male"],
      type: ["psychology"],
      link: "https://researchportal.bath.ac.uk/en/publications/cognitive-behavioural-therapy-for-psychiatric-problems-a-practica",
    },
    {
      title:
        "The Science of Emotions: Decoding the Complexities of Human Feelings",
      subTitle:
        "Exploring The Science of Emotions: Decoding the Complexities of Human Feelings",
      createdAt: "2023-05-01",
      authors: "John Smith",
      image: Im2,
      gender: ["male"],
      type: ["psychology"],
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0278262603000034",
    },
    {
      title:
        "Breaking the Stigma: Promoting Mental Health Awareness and Acceptance",
      subTitle:
        "Harnessing optimism Breaking the Stigma: Promoting Mental Health Awareness and Acceptance",
      createdAt: "2023-05-05",
      authors: "Emily Johnson",
      image: UnlockingtheSecretsofSelfCompassion,
      gender: ["female"],
      type: ["psychology"],
      link: "",
    },
    {
      title:
        "The Role of Resilience in Overcoming Adversity: Building Psychological Strength",
      subTitle:
        "Applying CBT The Role of Resilience in Overcoming Adversity: Building Psychological Strength",
      createdAt: "2023-05-10",
      authors: "Michael Davis",
      image: TheRoleofResilience,
      gender: ["male"],
      type: ["psychology"],
      link: "",
    },
    {
      title: "Understanding the Human Mind",
      subTitle: "Exploring the depths of psychology",
      createdAt: "2023-05-01",
      authors: "John Smith",
      image: HumanmindUnderstad,
      gender: ["male"],
      type: ["psychology"],
      link: "",
    },
    {
      title:
        "Unlocking the Secrets of Self-Compassion: Nurturing Mental Well-Being",
      subTitle:
        "Harnessing optimism Unlocking the Secrets of Self-Compassion: Nurturing Mental Well-Being",
      createdAt: "2023-05-05",
      authors: "Emily Johnson",
      image: UnlockingtheSecretsofSelfCompassion,
      gender: ["female"],
      type: ["psychology"],
      link: "",
    },

    // Add more articles as needed
  ]);
  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi",
  //         {
  //           params: {
  //             db: "pubmed",
  //             term: "psychology", // Example search term
  //             api_key: "57213bffb2b67d872835bd75ed1fbec3e709", // Replace with your actual API key
  //             retmax: 10, // Maximum number of results to retrieve
  //             format: "json",
  //             id: "1",
  //           },
  //         }
  //       );

  //       const articleIds = response.data.esearchresult.idlist;
  //       // Use the retrieved article IDs to fetch detailed information if needed
  //       // You can make another request to the PubMed API's efetch endpoint

  //       // Update the state with the retrieved articles
  //       setArticles(articleIds);
  //     } catch (error) {
  //       console.error("Error fetching articles:", error);
  //     }
  //   };

  //   fetchArticles();
  // }, []);

  return (
    <div className="w-[90%] flex flex-col justify-start items-start gap-6">
      {articles.map((item, index) => {
        return <Crard key={index} article={item} />;
      })}
    </div>
  );
};

export default Index;
