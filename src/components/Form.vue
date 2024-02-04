<!--
    full name, phone number, hero alias, emergency, email, dob, password, motivation, confirm, backstoyr 
 -->

<template>
    <div class="relative flex flex-col item-center justify-center">
        <div
            class="w-full py-6 m-auto lg:max-w-lg bg-gray-900 rounded-lg opacity-90 px-5"
        >
            <h1 class="text-3xl font-semibold text-center text-white">
                Enroll to become a hero!
            </h1>
            <form class="space-y-2 flex flex-wrap" @submit.prevent="submitForm">
                <div class="w-full md:w-1/2">
                    <div class="mx-2">
                        <label class="label" for="firstName">
                            <span class="text-base label-text">Full name</span>
                        </label>
                        <input
                            id="firstName"
                            required
                            type="text"
                            placeholder="Jane Doe"
                            class="w-full placeholder-color input input-bordered focus:input-primary"
                        />
                    </div>
                    <!-- <div class="mx-2">
                        <label class="label" for="NickName">
                            <span class="text-base label-text">Hero Alias</span>
                        </label>
                        <input
                            id="nickname"
                            ref="nameInput"
                            required
                            placeholder="Saitama the Caped Baldy"
                            type="text"
                            class="w-full placeholder-color input input-bordered focus:input-primary"
                        />
                    </div> -->
                    <div class="mx-2">
                        <label class="label" for="email">
                            <span
                                class="text-base label-text"
                                :class="{ 'text-error': state.isEmailInvalid }"
                                >{{ emailLabelText }}</span
                            >
                        </label>
                        <input
                            v-model="email"
                            ref="emailInput"
                            id="email"
                            required
                            type="mail"
                            placeholder="Email Address"
                            class="placeholder-color w-full input input-bordered"
                            :class="
                                state.isEmailInvalid
                                    ? 'focus:input-error'
                                    : 'focus:input-primary'
                            "
                        />
                    </div>
                    <div class="mx-2">
                        <label class="label" for="confirmPassword">
                            <span class="text-base label-text"
                                >Confirm password</span
                            >
                        </label>
                        <input
                            v-model="confirmPassword"
                            id="confirmPassword"
                            required
                            type="password"
                            placeholder="1234567890"
                            class="w-full placeholder-color input input-bordered focus:input-primary"
                        />
                    </div>
                    <div class="mx-2">
                        <label class="label" for="phoneNumber2">
                            <span
                                class="text-base label-text"
                                :class="{
                                    'text-error':
                                        state.isEmergencyContactInvalid,
                                }"
                                >{{ emergencyContactLabelText }}</span
                            >
                        </label>
                        <input
                            ref="emergencyContactInput"
                            v-model="emergencyContact"
                            id="phoneNumber2"
                            required
                            type="phone"
                            placeholder="1234567890"
                            class="placeholder-color w-full input input-bordered"
                            :class="
                                state.isEmergencyContactInvalid
                                    ? 'focus:input-error'
                                    : 'focus:input-primary'
                            "
                        />
                    </div>
                    <!-- <div class="mx-2">
                        <label class="label" for="password">
                            <span
                                class="text-base label-text"
                                :class="{
                                    'text-error': state.isPasswordInvalid,
                                }"
                                >{{ passwordLabelText }}</span
                            >
                        </label>
                        <input
                            v-model="password"
                            ref="passwordInput"
                            id="password"
                            required
                            type="password"
                            placeholder="1234567890"
                            :class="
                                state.isPasswordInvalid
                                    ? 'focus:input-error'
                                    : 'focus:input-primary'
                            "
                            class="w-full placeholder-color input input-bordered"
                        />
                    </div> -->

                    <div class="mx-2">
                        <label class="label" for="motivation">
                            <span
                                class="text-base label-text"
                                :class="{
                                    'text-error': state.isMotivationInvalid,
                                }"
                                >{{ motivationLabelText }}</span
                            >
                        </label>
                        <textarea
                            v-model="motivation"
                            ref="motivationInput"
                            id="motivation"
                            required
                            type="text"
                            placeholder="Max 150 words"
                            class="placeholder-color w-full textarea textarea-bordered"
                            :class="
                                state.isMotivationInvalid
                                    ? 'focus:textarea-error'
                                    : 'focus:textarea-primary'
                            "
                        />
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <div class="mx-2">
                        <label class="label" for="NickName">
                            <span class="text-base label-text">Hero Alias</span>
                        </label>
                        <input
                            id="nickname"
                            ref="nameInput"
                            required
                            placeholder="Saitama the Caped Baldy"
                            type="text"
                            class="w-full placeholder-color input input-bordered focus:input-primary"
                        />
                    </div>
                    <div class="mx-2">
                        <label class="label" for="password">
                            <span
                                class="text-base label-text"
                                :class="{
                                    'text-error': state.isPasswordInvalid,
                                }"
                                >{{ passwordLabelText }}</span
                            >
                        </label>
                        <input
                            v-model="password"
                            ref="passwordInput"
                            id="password"
                            required
                            type="password"
                            placeholder="1234567890"
                            :class="
                                state.isPasswordInvalid
                                    ? 'focus:input-error'
                                    : 'focus:input-primary'
                            "
                            class="w-full placeholder-color input input-bordered"
                        />
                    </div>
                    <div class="mx-2">
                        <label class="label" for="phoneNumber1">
                            <span
                                class="text-base label-text"
                                :class="{
                                    'text-error': state.isPhoneNumberInvalid,
                                }"
                                >{{ phoneNumberLabelText }}</span
                            >
                        </label>
                        <input
                            ref="phoneNumberInput"
                            v-model="phoneNumber"
                            id="phonenumber1"
                            required
                            type="phone"
                            placeholder="1234567890"
                            class="placeholder-color w-full input input-bordered"
                            :class="
                                state.isPhoneNumberInvalid
                                    ? 'focus:input-error'
                                    : 'focus:input-primary'
                            "
                        />
                    </div>
                    <!-- <div class="mx-2">
                        <label class="label" for="phoneNumber2">
                            <span
                                class="text-base label-text"
                                :class="{
                                    'text-error':
                                        state.isEmergencyContactInvalid,
                                }"
                                >{{ emergencyContactLabelText }}</span
                            >
                        </label>
                        <input
                            ref="emergencyContactInput"
                            v-model="emergencyContact"
                            id="phoneNumber2"
                            required
                            type="phone"
                            placeholder="1234567890"
                            class="placeholder-color w-full input input-bordered"
                            :class="
                                state.isEmergencyContactInvalid
                                    ? 'focus:input-error'
                                    : 'focus:input-primary'
                            "
                        />
                    </div> -->
                    <div class="mx-2">
                        <label class="label" for="dob">
                            <span
                                class="text-base label-text"
                                :class="{ 'text-error': state.isDobInvalid }"
                                >{{ dobLabelText }}</span
                            >
                        </label>
                        <input
                            v-model="dob"
                            :class="
                                state.isDobInvalid
                                    ? 'focus:input-error'
                                    : 'focus:input-primary'
                            "
                            ref="dobInput"
                            id="dob"
                            required
                            type="date"
                            placeholder=""
                            class="w-full input input-bordered"
                        />
                    </div>
                    <!-- <div class="mx-2">
                        <label class="label" for="motivation">
                            <span
                                class="text-base label-text"
                                :class="{
                                    'text-error': state.isMotivationInvalid,
                                }"
                                >{{ motivationLabelText }}</span
                            >
                        </label>
                        <textarea
                            v-model="motivation"
                            ref="motivationInput"
                            id="motivation"
                            required
                            type="text"
                            placeholder="Max 150 words"
                            class="placeholder-color w-full textarea textarea-bordered"
                            :class="
                                state.isMotivationInvalid
                                    ? 'focus:textarea-error'
                                    : 'focus:textarea-primary'
                            "
                        />
                    </div> -->
                    <div class="mx-2">
                        <label class="label" for="backstory">
                            <span
                                class="text-base label-text"
                                :class="{
                                    'text-error': state.isBackstoryInvalid,
                                }"
                                >{{ backstoryLabelText }}</span
                            >
                        </label>
                        <textarea
                            v-model="backstory"
                            ref="backstoryInput"
                            id="backstory"
                            required
                            type="text"
                            placeholder="Max 300 words"
                            class="placeholder-color w-full textarea textarea-bordered"
                            :class="
                                state.isBackstoryInvalid
                                    ? 'focus:textarea-error'
                                    : 'focus:textarea-primary'
                            "
                        />
                    </div>
                </div>
                <div class="w-full flex justify-center font-bold mt-5">
                    <button class="btn btn-info text-white">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<!-- <template>
    <div class="relative flex flex-col item-center justify-center">
        <div
            class="w-full p-6 m-auto lg:max-w-lg lg:my-10 bg-gray-900 rounded-lg opacity-90 px-5"
        >
            <h1 class="text-3xl font-semibold text-center text-white my-5">
                Enroll to become a hero!
            </h1>
            <form class="space-y-4" @submit.prevent="submitForm">
                <div class="flex justify-center font-bold mt-5">
                    <button class="btn btn-info text-white">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template> -->

<script>
import { ref, reactive, computed } from "vue"
import { useStore } from "vuex"

export default {
    setup() {
        const store = useStore()
        const dob = ref(null)
        const phoneNumberInput = ref(null)
        const phoneNumber = ref("")
        const dobInput = ref(null)
        const backstoryInput = ref(null)
        const password = ref("")
        const confirmPassword = ref("")
        const passwordInput = ref(null)
        const backstory = ref("")
        const motivation = ref("")
        const state = reactive({})
        const motivationInput = ref(null)
        const motivationLabelText = computed(() => {
            return state.isMotivationInvalid
                ? "Motivation should be 150 words or less."
                : "Motivation"
        })

        const emergencyContact = ref("")
        const emergencyContactInput = ref(null)
        const emailInput = ref(null)
        const nameInput = ref(null)
        const email = ref("")

        let errorCount = 0

        const emergencyContactLabelText = computed(() => {
            return state.isEmergencyContactInvalid
                ? "Please enter a valid emergency contact number."
                : "In case of emergency"
        })

        const dobLabelText = computed(() => {
            return state.isDobInvalid
                ? "You must be 18 or above to register!"
                : "Date Of Birth"
        })

        const passwordLabelText = computed(() => {
            return state.isPasswordInvalid
                ? "Password and confirm password do not match."
                : "Password"
        })

        const backstoryLabelText = computed(() => {
            return state.isBackstoryInvalid
                ? "Backstory should be 300 words or less."
                : "Backstory"
        })

        const phoneNumberLabelText = computed(() => {
            return state.isPhoneNumberInvalid
                ? "Please enter a valid phone number."
                : "Phone Number"
        })

        const isPasswordMatch = () => {
            return password.value === confirmPassword.value
        }

        const calculateAge = (dob) => {
            const diff = Date.now() - new Date(dob).getTime()
            const ageDate = new Date(diff)
            return Math.abs(ageDate.getUTCFullYear() - 1970)
        }

        const isPhoneNumberValid = (phoneNumberId) => {
            const phoneNumber = document.getElementById(phoneNumberId)
            const phoneNumberRegex =
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            return phoneNumberRegex.test(phoneNumber.value)
        }

        const emailLabelText = computed(() => {
            return state.isEmailInvalid
                ? "Please enter a valid email address."
                : "Email"
        })

        const isEmailValid = () => {
            const email = document.getElementById("email")
            const emailRegex =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return emailRegex.test(email.value)
        }

        const isWordCountValid = (text, limit) => {
            const wordCount = text.split(" ").length
            return wordCount <= limit
        }

        const validateField = (isValid, invalidStateKey, inputRef) => {
            if (!isValid) {
                state[invalidStateKey] = true
                if (errorCount === 0) {
                    inputRef.value.focus()
                }
                errorCount++
                return false
            } else {
                state[invalidStateKey] = false
                return true
            }
        }

        const submitForm = () => {
            const age = calculateAge(dob.value)
            errorCount = 0

            !validateField(isEmailValid(), "isEmailInvalid", emailInput)
            !validateField(
                isPasswordMatch(),
                "isPasswordInvalid",
                passwordInput,
            )
            !validateField(
                isPhoneNumberValid("phonenumber1"),
                "isPhoneNumberInvalid",
                phoneNumberInput,
            )
            !validateField(
                isPhoneNumberValid("phoneNumber2"),
                "isEmergencyContactInvalid",
                emergencyContactInput,
            )
            !validateField(age >= 18, "isDobInvalid", dobInput)
            !validateField(
                isWordCountValid(motivation.value, 150),
                "isMotivationInvalid",
                motivationInput,
            )
            !validateField(
                isWordCountValid(backstory.value, 300),
                "isBackstoryInvalid",
                backstoryInput,
            )

            if (errorCount === 0) {
                alert("Your application has been submitted.")
                store.commit("addHero", {
                    name: nameInput.value.value,
                    elo: 1200,
                })
            }
        }

        return {
            dob,
            submitForm,
            state,
            dobLabelText,
            password,
            confirmPassword,
            passwordInput,
            passwordLabelText,
            backstory,
            motivation,
            backstoryLabelText,
            motivationLabelText,
            phoneNumberLabelText,
            phoneNumber,
            emergencyContact,
            emergencyContactLabelText,
            emailLabelText,
            email,
            phoneNumberInput,
            dobInput,
            backstoryInput,
            motivationInput,
            emergencyContactInput,
            emailInput,
            passwordInput,
            nameInput,
        }
    },
}
</script>

<style scoped>
.placeholder-color::placeholder {
    color: #5f6c81;
}

.w-full.md\:w-1\/2 {
    padding: 0;
    margin: 0;
}
</style>
