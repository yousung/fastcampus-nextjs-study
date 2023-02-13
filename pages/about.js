import Layout from "@/components/Layout";
import SubLayout from "@/components/SubLayout";

export default function About() {
  return (
    <h1>
      About Page
    </h1>
  )
}

About.getLayout = (page) => {
    return <Layout><SubLayout>{page}</SubLayout></Layout>
}