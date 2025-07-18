import AppointmentForm from "@/components/forms/appointment-form";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default async function NewAppointment({ params }: SearchParamProps) {
  const { userId } = params;
  const router = useRouter();

  const patient = await getPatient(userId);

  if (!patient) router.push(`/patients/${userId}/register`);

  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification | PasskeyModal */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />
          <p className="copyright mt-10 py-12">© 2025 CarePulse</p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
