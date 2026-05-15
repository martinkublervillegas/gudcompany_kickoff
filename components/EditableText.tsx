"use client";

import { useEffect, useRef } from "react";
import type { ElementType } from "react";
import { useEditMode } from "@/context/EditModeContext";

interface Props {
  tag?: ElementType;
  id: string;
  style?: React.CSSProperties;
  className?: string;
  children: string;
}

export default function EditableText({ tag: Tag = "span", id, style, className, children }: Props) {
  const { editMode, getText, setText } = useEditMode();
  const ref = useRef<HTMLElement>(null);
  const value = getText(id, children);

  useEffect(() => {
    if (!ref.current) return;
    if (ref.current.textContent !== value) {
      ref.current.textContent = value;
    }
  }, [value, editMode]);

  if (!editMode) {
    return <Tag style={style} className={className}>{value}</Tag>;
  }

  return (
    <Tag
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      style={{
        ...style,
        outline: "none",
        borderBottom: "1.5px dashed var(--gd-green)",
        cursor: "text",
        minWidth: 20,
        display: "inline-block",
      }}
      className={className}
      onBlur={(e: React.FocusEvent<HTMLElement>) => setText(id, e.currentTarget.textContent ?? "")}
    />
  );
}
