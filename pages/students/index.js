import Link from "next/link";

function StudentList({ student }) {
  return (
    <>
      <h1>List of students</h1>
      {student.map((student) => {
        return (
          <div key={student.id}>
            <Link href={`/students/${student.id}`}>
              <h2>
                {student.id} {student.name} {student.rollNo}
              </h2>
              <hr />
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default StudentList;

export async function getStaticProps() {
  console.log("generating / regenerating student list");
  const res = await fetch("http://localhost:4000/students");
  const data = await res.json();
  return {
    props: {
      student: data,
    },
    revalidate: 30,
  };
}
