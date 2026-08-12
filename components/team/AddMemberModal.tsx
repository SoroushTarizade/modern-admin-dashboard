"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TeamMember } from "@/types/team";

interface AddMemberModalProps {
    open: boolean;
    onClose: () => void;
    onSave: (member: TeamMember) => void;
}

export default function AddMemberModal({
    open,
    onClose,
    onSave,
}: AddMemberModalProps) {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");

    const [preview, setPreview] = useState(
        "/images/img-resume.jpg"
    );

    if (!open) {
        return null;
    }

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        setPreview(imageUrl);
    };

    const handleSave = () => {
        if (
            !name.trim() ||
            !role.trim() ||
            !email.trim()
        ) {
            return;
        }

        const newMember: TeamMember = {
            id: Date.now(),
            name: name.trim(),
            role: role.trim(),
            email: email.trim(),
            image: preview,
        };

        onSave(newMember);

        setName("");
        setRole("");
        setEmail("");
        setPreview("/images/img-resume.jpg");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div
                className="
                    relative
                    w-full
                    max-w-lg
                    rounded-3xl
                    border
                    border-border
                    bg-card
                    p-6
                    sm:p-8
                "
            >

                {/* Close */}

                <button
                    onClick={onClose}
                    className="
                        absolute
                        right-5
                        top-5
                        rounded-lg
                        p-2
                        transition
                        hover:bg-secondary
                    "
                >
                    <IoClose size={24} />
                </button>

                <h2 className="text-2xl font-bold">
                    Add New Member
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                    Add a new member to your team.
                </p>

                {/* Avatar */}

                <div className="mt-6 flex justify-center">
                    <label className="cursor-pointer">

                        <img
                            src={preview}
                            alt="Profile preview"
                            className="
                                h-28
                                w-28
                                rounded-full
                                border-4
                                border-border
                                object-cover
                                transition
                                hover:opacity-80
                            "
                        />

                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleImageChange}
                        />

                    </label>
                </div>

                <p className="mt-2 text-center text-xs text-muted-foreground">
                    Click the image to upload a profile picture
                </p>

                {/* Form */}

                <div className="mt-6 space-y-4">

                    <input
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        placeholder="Full Name"
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-border
                            bg-background
                            px-4
                            outline-none
                            focus:border-primary
                        "
                    />

                    <input
                        value={role}
                        onChange={(e) =>
                            setRole(e.target.value)
                        }
                        placeholder="Role"
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-border
                            bg-background
                            px-4
                            outline-none
                            focus:border-primary
                        "
                    />

                    <input
                        type="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Email"
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-border
                            bg-background
                            px-4
                            outline-none
                            focus:border-primary
                        "
                    />

                </div>

                {/* Buttons */}

                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                    <button
                        onClick={onClose}
                        className="
                            h-11
                            rounded-xl
                            border
                            border-border
                            px-6
                        "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        disabled={
                            !name.trim() ||
                            !role.trim() ||
                            !email.trim()
                        }
                        className="
                            h-11
                            rounded-xl
                            bg-primary
                            px-6
                            font-semibold
                            text-white
                            transition
                            hover:opacity-90
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        Save Member
                    </button>

                </div>

            </div>

        </div>
    );
}