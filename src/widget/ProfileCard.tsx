import { Box, Paper, Typography } from "@mui/material";

interface ProfileCardProps {
  name: string;
  contact: string;
  idNumber: string;
  birthday: string;
  age: number;
  documentLink: string;
  patientType: string;
  serviceType: string;
  travelAbility: string;
  diagnosis: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  contact,
  idNumber,
  birthday,
  age,
  documentLink,
  patientType,
  serviceType,
  travelAbility,
  diagnosis,
}) => (
  <Paper
    sx={{
      padding: "0px 16px 0px 12px",
      marginBottom: "16px",
      borderRadius: "8px",
      border: "1px solid #6A9BFF",
      height: "218px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.05)",
    }}
  >
    <ProfileHeader name={name} />
    <ProfileDetails patientType={patientType} serviceType={serviceType} />
    <ContactInfo contact={contact} />
    <AdditionalInfo
      idNumber={idNumber}
      birthday={birthday}
      age={age}
      documentLink={documentLink}
    />
    <Divider />
    <ProfileFooter travelAbility={travelAbility} diagnosis={diagnosis} />
  </Paper>
);

const ProfileHeader: React.FC<{ name: string }> = ({ name }) => (
  <Typography
    variant="body1"
    sx={{
      fontWeight: "bold",
      color: "#4F4F4F",
      marginBottom: "8px",
      textAlign: "center",
    }}
  >
    <img src="/man.svg" alt="Icon" style={{ width: "24px", height: "24px" }} />
    {name}
  </Typography>
);

const ProfileDetails: React.FC<{ patientType: string; serviceType: string }> = ({
  patientType,
  serviceType,
}) => (
  <Box
    sx={{
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      gap: "12px",
    }}
  >
    <Typography sx={{ color: "#4F4F4F" }}>
      <Typography component="span" sx={{ color: "#407BF1" }}>
        ประเภทผู้ป่วย:
      </Typography>{" "}
      {patientType}
    </Typography>
    <Typography sx={{ color: "#4F4F4F" }}>
      <Typography component="span" sx={{ color: "#407BF1" }}>
        ประเภทการบริการ:
      </Typography>{" "}
      {serviceType}
    </Typography>
  </Box>
);

const ContactInfo: React.FC<{ contact: string }> = ({ contact }) => (
  <Box
    sx={{
      height: "22px",
      width: "319px",
      backgroundColor: "#FFA748",
      borderRadius: "30px",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "16px",
      color: "white",
    }}
  >
    {contact}
  </Box>
);

const AdditionalInfo: React.FC<{
  idNumber: string;
  birthday: string;
  age: number;
  documentLink: string;
}> = ({ idNumber, birthday, age, documentLink }) => (
  <Box
    sx={{
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      marginTop: "8px",
    }}
  >
    <Typography sx={{ color: "#808080", display: "flex", alignItems: "center" }}>
      <img
        src="/id.svg"
        alt="Icon"
        style={{ width: "24px", height: "24px", marginRight: "8px" }}
      />
      {idNumber}
    </Typography>
    <Typography sx={{ color: "#808080", display: "flex", alignItems: "center" }}>
      <img
        src="/birthday.svg"
        alt="Icon"
        style={{ width: "24px", height: "24px", marginRight: "8px" }}
      />
      {birthday} 
    </Typography>
    <Typography
      sx={{
        color: "#548AF6",
        textDecoration: "underline",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src="/birthday.svg"
        alt="Icon"
        style={{ width: "24px", height: "24px", marginRight: "8px" }}
      />
      <a  target="_blank" rel="noopener noreferrer">
        ดูเอกสารบัตรประชาชน
      </a>
    </Typography>
  </Box>
);

const Divider = () => (
  <Box
    sx={{
      width: "694px",
      height: "1px",
      backgroundColor: "#548AF6",
      margin: "8px 0",
    }}
  />
);

const ProfileFooter: React.FC<{ travelAbility: string; diagnosis: string }> = ({
  travelAbility,
  diagnosis,
}) => (
  <Box
    sx={{
      display: "flex",
      gap: "12px",
      width: "100%",
      justifyContent: "start",
      alignItems: "center",
    }}
  >
    <Typography sx={{ color: "#4F4F4F" }}>
      <Typography component="span" sx={{ color: "#407BF1", marginRight: "4px" }}>
        ความสามารถในการเดินทาง:
      </Typography>
      {travelAbility}
    </Typography>
    <Typography sx={{ color: "#4F4F4F" }}>
      <Typography component="span" sx={{ color: "#407BF1", marginRight: "4px" }}>
        การวินิจฉัยโรค:
      </Typography>
      {diagnosis}
    </Typography>
  </Box>
);

export default ProfileCard;
