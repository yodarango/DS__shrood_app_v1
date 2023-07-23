import { Button, Icon, IconButton } from "./components";

function App() {
  return (
    <main>
      <h1>Buttons</h1>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button danger>Danger</Button>
      <h1>Icon Buttons</h1>
      <IconButton primary>
        <Icon name='trash' />
      </IconButton>
      <IconButton secondary>
        <Icon name='sparkles' />
      </IconButton>
      <IconButton danger>
        <Icon name='heart' />
      </IconButton>
    </main>
  );
}

export default App;
