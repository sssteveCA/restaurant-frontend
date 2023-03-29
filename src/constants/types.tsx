
namespace Types{

    /**
     * CheckBoxComponent props
     */
    export type CheckBoxProps = {
        checkbox_id: string, label_text: string
    }

    /**
     * ContactsComponent props
     */
    export type ContactsProps = {
        title: string
    }

    /**
     * ContactsComponent state
     */
    export type ContactsState = {
        name: string, email: string, message: string 
    }

    /**
     * LabelInputComponent props
     */
    export type LabelInputProps = {
        label_text: string, input_id: string, input_type: string, onInputChange: (id: string, value: string) => void
    }

    /**
     * LabelTextAreaComponent props
     */
    export type LabelTextAreaProps = {
        label_text: string, textarea_id: string, onTextAreaChange: (id: string, value: string) => void
    }

    /**
     * LoginComponent state
     */
    export type LoginState = {
        username: string, password: string
    }

    export type MenuItem = {
        id: number, link: string, title: string
    }

    /**
     * RegisterComponent state
     */
    export type RegisterState = {
        username: string, email: string, password: string, conf_password: string
    }

    /**
     * TwoButtonsComponent props
     */
    export type TwoButtonsProps = {
        buttons: [
            { classes: string, text: string },
            { classes: string, text: string },
        ],
        onPrimaryButtonClick(): void
    }
}

export default Types