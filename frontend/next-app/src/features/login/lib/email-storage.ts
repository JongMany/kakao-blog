type Props = {
  email: string;
  shouldRemember?: boolean;
};

interface RememberEmailState {
  email: string;
  shouldRemember: boolean;
}

/* rememberEmail 상태에 따라 LocalSotrage에 데이터를 저장할지 말지를 결정 */
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
      email: "",
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
    email: "",
  };
};
