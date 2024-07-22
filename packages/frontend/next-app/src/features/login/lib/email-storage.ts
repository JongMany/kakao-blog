type Props = {
  email: string;
  shouldRemember?: boolean;
};

interface RememberEmailState {
  email?: string;
  shouldRemember: boolean;
}

export const toggleEmailStorage = ({ email, shouldRemember = false }: Props) => {
  if (shouldRemember) {
    const persistState: RememberEmailState = {
      email,
      shouldRemember,
    };
    localStorage.setItem("persistEmail", JSON.stringify(persistState));
  } else {
    const persistState: RememberEmailState = {
      shouldRemember,
    };
    localStorage.setItem("persistEmail", JSON.stringify(persistState));
  }
};

export const getEmailState = (): RememberEmailState => {
  const persistState = localStorage.getItem("persistEmail");
  if (persistState) {
    return JSON.parse(persistState);
  }
  return {
    shouldRemember: false,
  };
};
