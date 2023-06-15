import { useRouter } from "next/router";

const Student = ({ student }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <h2>
        {student.id} {student.name} {student.rollNo}
      </h2>
      <p>{student.deatils}</p>
    </>
  );
};

export default Student;

export async function getStaticPaths() {
  return {
    paths: [{ params: { studentId: `1` } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:4000/students/${params.studentId}`);
  const data = await res.json();
  return {
    props: {
      student: data,
    },
  };
}
