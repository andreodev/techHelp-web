// components/UserProfile.tsx
interface UserProfileProps {
  name: string;
  imageUrl?: string; 
}

export default function UserProfile({ name, imageUrl }: UserProfileProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">Bem-vindo, {name}!</span>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Foto de ${name}`}
          className="w-9 h-9 rounded-full object-cover border-2 border-white"
        />
      ) : (
        <div className="w-9 h-9 bg-white text-blue-600 rounded-full flex items-center justify-center">
          <span className="text-sm font-bold">{name.charAt(0)}</span>
        </div>
      )}
    </div>
  );
}
