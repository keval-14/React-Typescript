import { Greet } from './Componants/props/Greet'
import { Person } from './Componants/props/Person'
import { PersonList } from './Componants/props/PersonList'
import { Status } from './Componants/props/Status'
import { Heading } from './Componants/props/Heading'
import { Oscar } from './Componants/props/Oscar'
import { Button } from './Componants/props/Button'
import { Input } from './Componants/props/Input'
import { Container } from './Componants/props/Container'
import { ThemeContextProvider } from './Componants/Context/ThemeContext'
import { Box } from './Componants/Context/Box'
import { UserContextProvider } from './Componants/Context/UserContext'
import { User } from './Componants/Context/User'

function App() {
  const personName = {
    first: 'Keval',
    last: 'Patel'
  }

  const nameList = [
    {
      first: 'Dwane',
      last: 'John'
    },
    {
      first: 'MS',
      last: 'Dhoni'
    },
    {
      first: 'Goblin',
      last: 'Spider'
    }
  ]

  return (
    <div className='App'>
      <Greet name='Keval' isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      />
      <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    
    
    </div>
  )
}

export default App