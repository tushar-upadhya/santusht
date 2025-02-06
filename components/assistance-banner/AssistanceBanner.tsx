import FeedbackForm from "../forms/FeedbackForm";
import RaiseGrievanceForm from "../forms/RaiseGrievanceForm";
import Logo from "../header/logo/Logo";
import DialogForm from "./DialogForm";

const AssistanceBanner: React.FC = () => {
    return (
        <div className="bg-background text-foreground text-center px-4 py-12 mt-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
                We are here to assist you.
            </h2>
            <p className="text-sm md:text-base max-w-3xl mx-auto mb-6 leading-relaxed">
                Urgent Assistance 24x7: Facing an emergency? Reach out for
                immediate support and expert help. We&#39re here around the
                clock to provide the assistance you need in critical situations.
                Your well-being is our top priority.
            </p>
            <div className="flex flex-col sm:flex-row justify-center dark:border-orange-500 dark:text-gray-300 text-primary items-center gap-4">
                {/* Raise Grievance  */}
                <DialogForm
                    title="SANTUSHT"
                    description="Your well-being is our priority."
                    formComponent={<RaiseGrievanceForm />}
                    buttonLabel="Raise Grievance"
                    logo={<Logo />}
                    location="All India Institute Of Medical Sciences, Ansari Nagar New Delhi"
                />

                <DialogForm
                    title="SANTUSHT"
                    description="Your well-being is our priority."
                    formComponent={<FeedbackForm />}
                    buttonLabel="Give Feedback"
                    logo={<Logo />}
                    location="All India Institute Of Medical Sciences, Ansari Nagar New Delhi"
                />
            </div>
        </div>
    );
};

export default AssistanceBanner;
