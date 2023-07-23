import { Button, Icon, IconButton } from "./components";
import { ButtonWithDirection } from "./components/inputs/button_with_direction";

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
      <h1>Icon Arrow</h1>
      <ButtonWithDirection primary direction='right'>
        Primary right
      </ButtonWithDirection>
      <ButtonWithDirection primary direction='left'>
        Primary left
      </ButtonWithDirection>
      <ButtonWithDirection secondary direction='right'>
        Secondary right
      </ButtonWithDirection>
      <ButtonWithDirection secondary direction='left'>
        Secondary left
      </ButtonWithDirection>
    </main>
  );
}

export default App;
