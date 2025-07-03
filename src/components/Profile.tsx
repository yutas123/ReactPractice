interface ProfileProps {
  textColor?: string;
  user?: {
    name: string;
    imageUrl: string;
    imageSize: number;
  };
}

const defaultUser = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile({ textColor = 'black', user = defaultUser }: ProfileProps) {
  return (
    <>
      <h1 style={{ color: textColor }}>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`Photo of ${user.name}`}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}