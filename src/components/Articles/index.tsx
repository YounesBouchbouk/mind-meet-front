/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from "react";
import Crard from "./Card";

export type ArticleType = {
  title: string;
  subTitle: string;
  createdAt: string;
  authors: string;
  image: string;
  gender: string[];
  type: string[];
};

type Props = {};

const Index = (props: Props) => {
  const [articles, setArticles] = useState<ArticleType[]>([
    {
      title: "Understanding the Human Mind",
      subTitle: "Exploring the depths of psychology",
      createdAt: "2023-05-01",
      authors: "John Smith",
      image: "psychology1.jpg",
      gender: ["male"],
      type: ["psychology"],
    },
    {
      title: "The Power of Positive Thinking",
      subTitle: "Harnessing optimism for mental well-being",
      createdAt: "2023-05-05",
      authors: "Emily Johnson",
      image: "psychology2.jpg",
      gender: ["female"],
      type: ["psychology"],
    },
    {
      title: "Cognitive Behavioral Therapy: A Practical Guide",
      subTitle: "Applying CBT techniques in everyday life",
      createdAt: "2023-05-10",
      authors: "Michael Davis",
      image: "psychology3.jpg",
      gender: ["male"],
      type: ["psychology"],
    },
    {
      title: "Understanding the Human Mind",
      subTitle: "Exploring the depths of psychology",
      createdAt: "2023-05-01",
      authors: "John Smith",
      image: "psychology1.jpg",
      gender: ["male"],
      type: ["psychology"],
    },
    {
      title: "The Power of Positive Thinking",
      subTitle: "Harnessing optimism for mental well-being",
      createdAt: "2023-05-05",
      authors: "Emily Johnson",
      image: "psychology2.jpg",
      gender: ["female"],
      type: ["psychology"],
    },
    {
      title: "Cognitive Behavioral Therapy: A Practical Guide",
      subTitle: "Applying CBT techniques in everyday life",
      createdAt: "2023-05-10",
      authors: "Michael Davis",
      image: "psychology3.jpg",
      gender: ["male"],
      type: ["psychology"],
    },
    {
      title: "Understanding the Human Mind",
      subTitle: "Exploring the depths of psychology",
      createdAt: "2023-05-01",
      authors: "John Smith",
      image: "psychology1.jpg",
      gender: ["male"],
      type: ["psychology"],
    },
    {
      title: "The Power of Positive Thinking",
      subTitle: "Harnessing optimism for mental well-being",
      createdAt: "2023-05-05",
      authors: "Emily Johnson",
      image: "psychology2.jpg",
      gender: ["female"],
      type: ["psychology"],
    },
    {
      title: "Cognitive Behavioral Therapy: A Practical Guide",
      subTitle: "Applying CBT techniques in everyday life",
      createdAt: "2023-05-10",
      authors: "Michael Davis",
      image: "psychology3.jpg",
      gender: ["male"],
      type: ["psychology"],
    },
    {
      title: "Understanding the Human Mind",
      subTitle: "Exploring the depths of psychology",
      createdAt: "2023-05-01",
      authors: "John Smith",
      image: "psychology1.jpg",
      gender: ["male"],
      type: ["psychology"],
    },
    {
      title: "The Power of Positive Thinking",
      subTitle: "Harnessing optimism for mental well-being",
      createdAt: "2023-05-05",
      authors: "Emily Johnson",
      image: "psychology2.jpg",
      gender: ["female"],
      type: ["psychology"],
    },
    {
      title: "Cognitive Behavioral Therapy: A Practical Guide",
      subTitle: "Applying CBT techniques in everyday life",
      createdAt: "2023-05-10",
      authors: "Michael Davis",
      image: "psychology3.jpg",
      gender: ["male"],
      type: ["psychology"],
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

  console.log(articles);
  return (
    <div className="w-[90%] flex flex-col justify-start items-start gap-6">
      {articles.map((item, index) => {
        return <Crard key={index} article={item} />;
      })}
    </div>
  );
};

export default Index;
