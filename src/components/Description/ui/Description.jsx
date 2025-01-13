import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { ContentBox } from "../../ContentBox";
import styles from "./Description.module.scss";
import { ProfileList } from "../../ProfileList/ui/ProfileList";

export const Description = ({ profile }) => {
  const [isFull, setIsFull] = useState(false);

  const toggleDescriptionHandler =() => {
    setIsFull(!isFull)
  }

  return (
    <ContentBox className={styles.profileContent} title="Company Overview">
      {!isFull && profile.description?.length > 300 ? (
        <p className={styles.description}>
          {profile.description?.slice(0, 300) + "..."}
        </p>
      ) : (
        <p className={styles.description}>{profile.description}</p>
      )}
       {profile.description?.length > 300 ? (
        <span
          className={styles.toggleDescription}
          onClick={toggleDescriptionHandler}
        >
          <IoChevronDownOutline className={isFull ? styles.rotate : ""} />
        </span>
      ) : null}
      <ProfileList profile={profile}/>
    </ContentBox>
  );
};
