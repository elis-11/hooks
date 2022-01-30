export const Content = () => {

    const handleNameChange = () => {
        const names = ['Rob', 'John', 'Dave', 'Peter', 'Luis']
        const concret = Math.floor(Math.random() *5)
        return names[concret]
    }
  return (
  <main>
<p>
    Hello {handleNameChange()}!
</p>
  </main>
  )
}
// export default Content