const mongoose = require("mongoose");

const PatientRegnSchema = new mongoose.Schema(
  {
    UHID: {
      type: String,
      uppercase: true,
      unique: true,
      trim: true,
      minlength: [10, "UHID cannot be shorter than 10 characters"],
      maxlength: [10, "UHID cannot be longer than 10 characters"],
      match: [/^[A-Z0-9]+$/, "UHID must be alphanumeric"],
    },
    patientNo: {
      type: String,
      uppercase: true,
      unique: true,
      trim: true,
      minlength: [7, "Patient Number cannot be shorter than 7 characters"],
      maxlength: [7, "Patient Number cannot be longer than 7 characters"],
      match: [/^[A-Z0-9]+$/, "Patient Number must be alphanumeric"],
    },
    patientType: {
      type: String,
      required: true,
    },
    registrationType: {
      type: String,
      required: true,
    },
    visitType: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
    },
    maritalStatus: {
      type: String,
    },
    contactNumber: {
      type: String,
      default: true,
    },
    alternateMobileNo: {
      type: String,
    },
    addressLineOne: {
      type: String,
      required: true,
    },
    addressLineTwo: {
      type: String,
    },
    state: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
    },
    doctor: {
      type: String,
    },
    doctorConsultationFee: {
      type: Number,
    },
    paymentStatus: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
    },
    payeeName: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
    },
    registrationDate: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: String,
    },
    updatedBy: {
      type: String,
    },
  },
  { timestamps: true }
);
PatientRegnSchema.pre("save", function (next) {
  this.fullName = `${this.salutation} ${this.firstName} ${this.middleName} ${this.lastName}`;
  next();
});
const PatientRegn = mongoose.model("PatientRegn", PatientRegnSchema);

module.exports = PatientRegn;
