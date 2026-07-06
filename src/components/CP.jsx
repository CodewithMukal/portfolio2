import React, { useEffect, useState } from 'react'
import leetcodewhite from "../assets/leetcode.svg"
import leetcodedark from "../assets/leetcode-dark.svg"

export const CP = () => {
    const username = "doesmukalcode";

    const [leetcode, setLeetcode] = useState(null);
    const [loading, setLoading] = useState(true);

    const cfHandle = "mukal.markanda123";

    const [codeforces, setCodeforces] = useState(null);
    const [loadingCF, setLoadingCF] = useState(true);

    useEffect(() => {
        const fetchCodeforces = async () => {
            try {
                const res = await fetch(
                    `https://codeforces-stats.tashif.codes/${cfHandle}`
                );

                const data = await res.json();
                setCodeforces(data);
                console.log(data)
            } catch (err) {
                console.error("Failed to fetch Codeforces data:", err);
            } finally {
                setLoadingCF(false);
            }
        };

        fetchCodeforces();
    }, [cfHandle]);

    useEffect(() => {
        const fetchLeetCode = async () => {
            try {
                const [profileRes, contestRes] = await Promise.all([
                    fetch(`https://leetcode-api-pied.vercel.app/user/${username}`),
                    fetch(`https://leetcode-api-pied.vercel.app/user/${username}/contests`),
                ]);

                const [profile, contests] = await Promise.all([
                    profileRes.json(),
                    contestRes.json(),
                ]);

                setLeetcode({
                    profile,
                    contests,
                });
            } catch (err) {
                console.error("Failed to fetch LeetCode data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchLeetCode();
    }, [username]);

    const solved = leetcode?.profile.submitStats.acSubmissionNum;

    const getSolved = (difficulty) =>
        solved?.find((item) => item.difficulty === difficulty)?.count ?? 0;

    const totalSolved = getSolved("All");
    const easySolved = getSolved("Easy");
    const mediumSolved = getSolved("Medium");
    const hardSolved = getSolved("Hard");
    const contestRating = leetcode?.contests.userContestRanking.rating
    const contestAttend = leetcode?.contests.userContestRanking.attendedContestsCount

    return (
        <div className="w-full mx-auto space-y-4 my-16 text-black dark:text-white">
            <div className="w-[90%] mx-auto rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-xl transition-all hover:shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img className="w-8 h-8 dark:hidden" src={leetcodewhite} alt="" />
                        <img className="w-8 h-8 hidden dark:block" src={leetcodedark} alt="" />

                        <a href={`https://leetcode.com/u/${username}`} target='_blank'>
                            <h2 className="font-bold text-xl">LeetCode</h2>
                            <p className="text-xs text-neutral-500">@{username}</p>
                        </a>
                    </div>

                    <div className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
                        {loading ? "Loading..." : `${totalSolved} Solved`}
                    </div>
                </div>

                {/* Solved Stats */}
                <div className="grid grid-cols-3 gap-3 mt-6">

                    <div className="rounded-2xl bg-green-500/10 p-4 text-center transition hover:scale-105">
                        <p className="text-3xl font-bold text-green-500">
                            {loading ? "--" : easySolved}
                        </p>
                        <p className="text-sm text-neutral-500 mt-1">Easy</p>
                    </div>

                    <div className="rounded-2xl bg-yellow-500/10 p-4 text-center transition hover:scale-105">
                        <p className="text-3xl font-bold text-yellow-500">
                            {loading ? "--" : mediumSolved}
                        </p>
                        <p className="text-sm text-neutral-500 mt-1">Medium</p>
                    </div>

                    <div className="rounded-2xl bg-red-500/10 p-4 text-center transition hover:scale-105">
                        <p className="text-3xl font-bold text-red-500">
                            {loading ? "--" : hardSolved}
                        </p>
                        <p className="text-sm text-neutral-500 mt-1">Hard</p>
                    </div>

                </div>

                {/* Divider */}
                <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-6" />

                {/* Contest Stats */}
                <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-4">
                        <p className="text-xs uppercase tracking-wider text-neutral-500">
                            Contest Rating
                        </p>

                        <p className="mt-2 text-3xl font-bold text-orange-500">
                            {loading
                                ? "--"
                                : Math.round(contestRating ?? 0)}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-4">
                        <p className="text-xs uppercase tracking-wider text-neutral-500">
                            Contests
                        </p>

                        <p className="mt-2 text-3xl font-bold">
                            {loading ? "--" : contestAttend}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[90%] mx-auto rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-xl transition-all hover:shadow-2xl">
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-3">
                        <img
                            src={"https://art.npanuhin.me/SVG/Codeforces/Codeforces.colored.svg"}
                            alt=""
                            className="w-6 h-6"
                        />
                        <a href='https://codeforces.com/profile/mukal.markanda123' target='_blank'>
                            <h2 className="font-bold">Codeforces</h2>
                            <p className="text-sm text-neutral-500">
                                @{codeforces?.handle}
                            </p>
                        </a>
                    </div>
                    <div className="text-center">
                        <div className="rounded-full capitalize bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
                            {codeforces?.rank}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">
                    <div className="rounded-xl bg-blue-500/10 p-3">
                        <p className="text-xs text-neutral-500">Current Rating</p>
                        <p className="text-2xl font-bold text-blue-500">
                            {codeforces?.data.currentRating}
                        </p>
                    </div>

                    <div className="rounded-xl bg-purple-500/10 p-3">
                        <p className="text-xs text-neutral-500">Max Rating</p>
                        <p className="text-2xl font-bold text-purple-500">
                            {codeforces?.maxRating}
                        </p>
                    </div>

                    <div className="rounded-xl bg-orange-500/10 p-3">
                        <p className="text-xs text-neutral-500">Contests</p>
                        <p className="text-2xl font-bold">
                            {codeforces?.contests_count}
                        </p>
                    </div>

                    <div className="rounded-xl bg-green-500/10 p-3">
                        <p className="text-xs text-neutral-500">Solved</p>
                        <p className="text-2xl font-bold text-green-500">
                            {codeforces?.data.totalSolved}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
