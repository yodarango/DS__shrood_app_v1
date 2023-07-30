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
  Avatar,
  AvatarWithLabel,
  MenuSlideUp,
  ExpandableTag,
  CardOptions,
  Card,
  CardImage,
  CardActionsLeft,
  CardActionsRight,
  ContentFeedback,
  CardContent,
} from "./components";
import image from "./assets/images/empty.webp";
import { MenuSlideUpItem } from "./components/navigation/menu_slide_up";
import { CardContentMeta } from "./components/layout/card";

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
      <MenuSlideUp primary>
        <MenuSlideUpItem icon={"trash"} value={1} onClick={() => {}}>
          My label with icon string
        </MenuSlideUpItem>
        <MenuSlideUpItem
          icon={
            <IconButton primary sx={{ width: 30, height: 30 }}>
              <Icon name='add' />
            </IconButton>
          }
          value={1}
          onClick={() => {}}
        >
          My label with icon jsx
        </MenuSlideUpItem>
      </MenuSlideUp>
      <MenuSlideUp secondary>
        <MenuSlideUpItem icon={"trash"} value={1} onClick={() => {}}>
          My label with icon string
        </MenuSlideUpItem>
        <MenuSlideUpItem
          icon={
            <IconButton sx={{ width: 30, height: 30 }}>
              <Icon name='add' />
            </IconButton>
          }
          value={1}
          onClick={() => {}}
        >
          My label with icon jsx
        </MenuSlideUpItem>
      </MenuSlideUp>

      <MenuSlideUp danger>
        <MenuSlideUpItem icon={"trash"} value={1} onClick={() => {}}>
          My label with icon string
        </MenuSlideUpItem>
        <MenuSlideUpItem
          icon={
            <IconButton sx={{ width: 30, height: 30 }}>
              <Icon name='add' />
            </IconButton>
          }
          value={1}
          onClick={() => {}}
        >
          My label with icon jsx
        </MenuSlideUpItem>
      </MenuSlideUp>

      <h1>Avatars</h1>
      <Avatar src={image} primary sx={{ width: 100, height: 100 }} />
      <Avatar src={image} secondary sx={{ width: 75, height: 75 }} />
      <Avatar src={image} tertiary />
      <Avatar src={image} error />
      <AvatarWithLabel
        sx={{ width: 30, height: 30 }}
        label='username'
        fontSize={10}
        src={image}
        secondary
      />
      <AvatarWithLabel src={image} label='username' align='end' />
      <AvatarWithLabel src={image} label='username' fontSize={20} align='top' />
      <AvatarWithLabel
        src={image}
        label='username'
        fontSize={30}
        align='bottom'
      />
      <ExpandableTag>
        <Paragraph>display Data</Paragraph>
        <Paragraph>Hide data </Paragraph>
      </ExpandableTag>
      <Card width={350}>
        <AvatarWithLabel
          sx={{ width: 30, height: 30 }}
          label='username'
          fontSize={10}
          src={image}
          secondary
        />
        <CardImage alt='my image' src={image} height={200} />
        <CardOptions icon='ellipsisH' secondary>
          <MenuSlideUpItem icon={"trash"} value={1} onClick={() => {}} danger>
            My label with icon string
          </MenuSlideUpItem>
        </CardOptions>
        <CardActionsLeft>
          <IconButton className='p-0 me-2'>
            <Icon name='heart' size={25} />
          </IconButton>
          <IconButton className='p-0'>
            <Icon name='comment' size={25} />
          </IconButton>
        </CardActionsLeft>
        <CardActionsRight>
          <ExpandableTag>
            <Paragraph className='color-font'>12/12/63</Paragraph>
            <Paragraph className='color-font'>04/09/67</Paragraph>
          </ExpandableTag>
        </CardActionsRight>
      </Card>

      <ContentFeedback width={400}>
        <AvatarWithLabel
          sx={{ width: 30, height: 30 }}
          label='username'
          fontSize={14}
          src={image}
          secondary
        />
        <CardContentMeta>
          <ExpandableTag>
            <Paragraph>display Data</Paragraph>
            <Paragraph>Hide data </Paragraph>
          </ExpandableTag>
        </CardContentMeta>
        <CardOptions icon='ellipsisH' secondary>
          <MenuSlideUpItem icon={"trash"} value={1} onClick={() => {}} danger>
            My label with icon string
          </MenuSlideUpItem>
        </CardOptions>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, ea
          enim iure tempore magni doloribus saepe, officia blanditiis, molestias
          doloremque reprehenderit veniam consequuntur quia dolor sint
          perspiciatis. Maxime, veritatis ea?
        </CardContent>
      </ContentFeedback>
      <div className='w-100 p-6'></div>
    </main>
  );
}

export default App;
