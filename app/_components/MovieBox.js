export default function MovieBox({ children }) {
  return (
    <section className="mt-6 bg-stone-600 h-[100vh] rounded-[1rem] relative overflow-auto p-2">
      {children}
    </section>
  )
}