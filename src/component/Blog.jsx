import React from "react";
import Section from "./Section";

export default function Blog() {
  const title1 = "Title1";
  const title2 = "Title2";
  const content1 =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis aut, distinctio consectetur recusandae itaque ex pariatur laudantium eius quam sequi. Placeat, consectetur. Ipsum autem officia consequuntur architecto obcaecati id magnam!";
  const content2 =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis aut, distinctio consectetur recusandae itaque ex pariatur laudantium eius quam sequi. Placeat, consectetur. Ipsum autem officia consequuntur architecto obcaecati id magnam!";
  const src1 =
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const src2 =
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col font-Poppins">
      <h1></h1>
      <Section src={src1} content={content1} order={""} title={title1} />
      <Section src={src2} content={content2} order={"md:order-2"} title={title2} />
    </div>
  );
}
