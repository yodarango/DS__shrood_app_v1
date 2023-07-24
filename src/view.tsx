import { FONT_COLOR } from "./assets/tokens";
import {
  ButtonWithDirection,
  ErrorImage,
  IconButton,
  Paragraph,
  Heading,
  Button,
  Icon,
  ResourceNotFoundImage,
  FinancialHelpImage,
  EmptyImage,
  Tabs,
  BottomNavigation,
} from "./components";

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
        <Icon name='add' />
      </IconButton>

      <h1>Icon With Direction</h1>
      <ButtonWithDirection primary direction='right' color='info'>
        Primary right info
      </ButtonWithDirection>
      <ButtonWithDirection primary direction='left'>
        Primary left
      </ButtonWithDirection>
      <ButtonWithDirection secondary direction='right' color='info'>
        Secondary right info
      </ButtonWithDirection>
      <ButtonWithDirection secondary direction='left'>
        Secondary left
      </ButtonWithDirection>
      <h1>Typography</h1>
      <Paragraph>Paragraph</Paragraph>
      <Heading variant='h6'>H6</Heading>
      <Heading variant='h5'>H5</Heading>
      <Heading variant='h4'>H4</Heading>
      <Heading variant='h3'>H3</Heading>
      <Heading variant='h2'>H2</Heading>
      <Heading variant='h1'>H1</Heading>
      <h1>Feedback Images</h1>
      <ErrorImage />
      <ResourceNotFoundImage />
      <FinancialHelpImage />
      <EmptyImage />
      <h1>Navigation</h1>
      <Tabs
        tabs={[
          { label: "one", value: 1 },
          { label: "two", value: 2 },
          { label: "three", value: 3 },
        ]}
        defaultTab={1}
        primary
      />
      <Tabs
        tabs={[
          { label: "one", value: 1 },
          { label: "two", value: 2 },
          { label: "three", value: 3 },
        ]}
        defaultTab={2}
        secondary
      />
      <Tabs
        tabs={[
          {
            icon: <Icon name='heart' color={FONT_COLOR} />,
            iconPosition: "start",
            value: 1,
          },
          {
            icon: <Icon name='trash' color={FONT_COLOR} />,
            iconPosition: "start",
            value: 2,
          },
          {
            icon: <Icon name='sparkles' color={FONT_COLOR} />,
            iconPosition: "start",
            value: 3,
          },
        ]}
        defaultTab={3}
        secondary
      />
      <BottomNavigation
        className='mt-4'
        defaultTab={2}
        tabs={[
          {
            icon: <Icon name='heart' color={FONT_COLOR} />,
            value: 1,
          },
          {
            icon: <Icon name='trash' color={FONT_COLOR} />,
            value: 2,
          },
          {
            icon: <Icon name='sparkles' color={FONT_COLOR} />,
            value: 3,
          },
        ]}
      />
    </main>
  );
}

export default App;
