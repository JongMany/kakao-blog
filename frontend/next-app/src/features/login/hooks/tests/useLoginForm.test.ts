// /**
//  * @jest-environment jsdom
//  */
// import { useLoginForm } from "@/features/login/hooks/useLoginForm";
// import { renderHook, act } from "@testing-library/react-hooks";

// describe("useLoginForm", () => {
//   const mockGetEmailState = vi.fn();
//   const mockToggleEmailStorage = jest.fn();
//   const mockSignIn = jest.fn();

//   beforeEach(() => {
//     mockGetEmailState.mockClear();
//     mockToggleEmailStorage.mockClear();
//     mockSignIn.mockClear();
//   });

//   it("should initialize with correct email State", () => {
//     mockGetEmailState.mockReturnValue({ email: "blackberry1114@naver.com", shouldRemember: true });
//     const { result } = renderHook(() =>
//       useLoginForm({
//         getEmailState: mockGetEmailState,
//         toggleEmailStorage: mockToggleEmailStorage,
//         signIn: mockSignIn,
//       }),
//     );
//     expect(result.current.rememberEmail).toEqual(true);
//     expect(result.current.getValues("email")).toEqual("blackberry1114@naver.com");
//   });
// });
