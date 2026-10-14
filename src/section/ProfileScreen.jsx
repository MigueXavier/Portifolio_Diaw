import { Navigate, useParams } from "react-router-dom";
import { profiles } from "../data/profile";

export default function ProfileScreen() {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === id);

  if (!profile) return <Navigate to="/perfis" replace />;

  return (
    <main className="profile">
      <section className="profile-content">
        {profile.image && (
          <img
            className="profile-photo"
            src={profile.image}
            alt={`Foto de ${profile.label}`}
          />
        )}
        <div className="profile-text">
          <h1>{profile.label}</h1>
          {profile.title && <h2>{profile.title}</h2>}
          {(profile.bio ?? []).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}